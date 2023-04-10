import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Merendero } from '../modelo/merendero.model';


@Injectable()
export class MerenderoServicio {
  merenderosColeccion: AngularFirestoreCollection<Merendero>;
  merenderoDoc: AngularFirestoreDocument<Merendero>;
  merenderos: Observable<Merendero[]>;
  merendero!: Observable<Merendero>;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore) {
    //recuperar coleccion de comedores
    this.merenderosColeccion = db.collection('merenderos', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

  //Método buscar
  buscarComedorPorNombre(nombre: string): Observable<Merendero[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('nombre', '>=', nombre).where('nombre', '<=', nombre + '\uf8ff');
    return this.db
      .collection<Merendero>('merenderos', queryFn)
      .valueChanges({ idField: 'id' });
  }

  //Solicitud datos de merenderos pidiendo id (regresa objeto de tipo comedor)
  getMerenderos(): Observable<Merendero[]> {
    //Obtener los merenderos
    this.merenderos = this.merenderosColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as Merendero;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.merenderos;
  }

  agregarMerendero(merendero: Merendero) {
    this.merenderosColeccion.add(merendero);
  }

  getMerendero(id: string): Observable<Merendero> {
    //recuperar comedor de la base de datos
    this.merenderoDoc = this.db.doc<Merendero>(`merenderos/${id}`);
    //recuperar objeto tipo comedor (observable)
     return this.merendero = this.merenderoDoc.snapshotChanges().pipe(
      map( accion=> {
        if (accion.payload.exists === false) {
          return null;
        }
        else {
          const datos: Merendero = accion.payload.data();
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    );


  }

  modificarMerendero(merendero: Merendero){
      this.merenderoDoc = this.db.doc(`merenderos/${merendero.id}`);
      this.merenderoDoc.update(merendero);
  }

  eliminarMerendero(merendero: Merendero){
    this.merenderoDoc = this.db.doc(`merenderos/${merendero.id}`);
    this.merenderoDoc.delete();
  }
}
