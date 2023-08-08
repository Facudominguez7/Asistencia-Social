import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,


} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comedor } from '../modelo/comedor.model';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable()
export class ComdeorServicio {
  comedoresColeccion: AngularFirestoreCollection<Comedor>;
  comedorDoc: AngularFirestoreDocument<Comedor>;
  comedores: Observable<Comedor[]>;
  comedor!: Observable<Comedor>;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {
    //recuperar coleccion de comedores
    this.comedoresColeccion = db.collection('comedores', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
  //Método buscar
  buscarComedorPorNombre(nombre: string): Observable<Comedor[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('nombre', '>=', nombre).where('nombre', '<=', nombre + '\uf8ff');
    return this.db
      .collection<Comedor>('comedores', queryFn)
      .valueChanges({ idField: 'id' });
  }

  buscarComedorPorDni(dni: string): Observable<Comedor[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('dni', '>=', dni).where('dni' , '<=', dni +  '\uf8ff');
    return this.db
      .collection<Comedor>('comedores', queryFn)
      .valueChanges({ idField: 'id' });
  }

  //Solicitud datos de comedores pidiendo id (regresa objeto de tipo comedor)
  getComedores(): Observable<Comedor[]> {
    //Obtener los comedores
    this.comedores = this.comedoresColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as Comedor;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.comedores;
  }

  agregarComedor(comedor: Comedor) {
    this.comedoresColeccion.add(comedor);
  }

  getComedor(id: string): Observable<Comedor> {
    //recuperar comedor de la base de datos
    this.comedorDoc = this.db.doc<Comedor>(`comedores/${id}`);
    //recuperar objeto tipo comedor (observable)
     return this.comedor = this.comedorDoc.snapshotChanges().pipe(
      map( accion=> {
        if (accion.payload.exists === false) {
          return null;
        }
        else {
          const datos: Comedor = accion.payload.data();
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    );


  }

  modificarComedor(comedor: Comedor){
      this.comedorDoc = this.db.doc(`comedores/${comedor.id}`);
      this.comedorDoc.update(comedor);
  }

  guardarDescripcion(id: string, descripcion: string){
    console.log('LLamando a guardarDescripciopn() con los siguientes valores:');
    console.log('id:', id);
    console.log('descripcion:', descripcion);

    return this.db.collection('comedores').doc(id).set({
      descripcion: descripcion
    }, {merge: true})
    .then(() => {
      console.log('Descripción actualizada correctamente');
    })
    .catch(error => {
      console.error('Error al actualizar la descripción:', error);
      throw error;
    });
}


  eliminarComedor(comedor: Comedor){
    let collectionRef = this.db.collection('comedores');
    let id = comedor.id;
    collectionRef.doc(id).delete();
  }

  agregarExcel(comedorId: string, archivo: File) {
    const rutaArchivo = `archivos_excel/${comedorId}/${archivo.name}`;
    const referenciaArchivo = this.storage.ref(rutaArchivo);
    const tareaCarga = this.storage.upload(rutaArchivo, archivo);

    tareaCarga.snapshotChanges().pipe(
      finalize(() => {
        referenciaArchivo.getDownloadURL().subscribe(url => {
          this.db.collection('comedores').doc(comedorId).update({ urlArchivoExcel: url });
        });
      })
    ).subscribe();
  }







}
