import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,


} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comedor } from '../modelo/comedor.model';
import { map } from 'rxjs/operators';

@Injectable()
export class ComdeorServicio {
  comedoresColeccion: AngularFirestoreCollection<Comedor>;
  comedorDoc: AngularFirestoreDocument<Comedor>;
  comedores: Observable<Comedor[]>;
  comedor!: Observable<Comedor>;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore) {
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

  eliminarComedor(comedor: Comedor){
    this.comedorDoc = this.db.doc(`comedores/${comedor.id}`);
    this.comedorDoc.delete();
  }
}
