import { Injectable } from '@angular/core';
import { Baja } from '../modelo/bajas.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class BajasService {
  bajasColeccion: AngularFirestoreCollection<Baja>;
  bajaDoc: AngularFirestoreDocument<Baja>;
  bajas: Observable<Baja[]>;
  baja!: Observable<Baja>;

  //Metodo conectar base de datos
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    //recuperar coleccion de bajas
    this.bajasColeccion = db.collection('bajas', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
  //Método buscar
  buscarBajaPorNombre(nombre: string): Observable<Baja[]> {
    const queryFn: QueryFn = (ref) =>
      ref
        .where('nombre', '>=', nombre)
        .where('nombre', '<=', nombre + '\uf8ff');
    return this.db
      .collection<Baja>('bajas', queryFn)
      .valueChanges({ idField: 'id' });
  }

  buscarBajaPorDni(dni: string): Observable<Baja[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('dni', '>=', dni).where('dni', '<=', dni + '\uf8ff');
    return this.db
      .collection<Baja>('bajas', queryFn)
      .valueChanges({ idField: 'id' });
  }

  //Solicitud datos de bajas pidiendo id (regresa objeto de tipo baja)
  getBajas(): Observable<Baja[]> {
    //Obtener los bajas
    this.bajas = this.bajasColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as Baja;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.bajas;
  }

  modificarBaja(baja: Baja){
    this.bajaDoc = this.db.doc(`bajas/${baja.id}`);
    this.bajaDoc.update(baja);
}

  agregarBaja(baja: Baja) {
    this.bajasColeccion.add(baja);
  }

  getBaja(id: string): Observable<Baja> {
    //recuperar baja de la base de datos
    this.bajaDoc = this.db.doc<Baja>(`bajas/${id}`);
    //recuperar objeto tipo baja (observable)
    return (this.baja = this.bajaDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos: Baja = accion.payload.data();
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    ));
  }

  eliminarBaja(baja: Baja) {
    let collectionRef = this.db.collection('bajas');

    let id = baja.id;

    collectionRef.doc(id).delete();
  }


}
