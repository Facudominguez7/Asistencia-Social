import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { AsistenciaGral } from '../modelo/AsistenciaGeneral';


@Injectable()
export class AsistenciaGeneralServicio {
  asistenciageneralCollection: AngularFirestoreCollection<AsistenciaGral>;
  asistenciaGDoc: AngularFirestoreDocument<AsistenciaGral>;
  asistenciasGenerales: Observable<AsistenciaGral[]>;
  asistenciaGeneral!: Observable<AsistenciaGral>;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore) {
    //recuperar coleccion de comedores
    this.asistenciageneralCollection = db.collection('asistencia general', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

  //Método buscar
  buscarAsistenciaGeneralPorNombre(nombre: string): Observable<AsistenciaGral[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('nombre', '>=', nombre).where('nombre', '<=', nombre + '\uf8ff');
    return this.db
      .collection<AsistenciaGral>('merenderos', queryFn)
      .valueChanges({ idField: 'id' });
  }

  //Solicitud datos de asistencias generales pidiendo id (regresa objeto de tipo asistencia general)
  getAsistenciasGenerales(): Observable<AsistenciaGral[]> {
    //Obtener las Asistencias Generales
    this.asistenciasGenerales = this.asistenciageneralCollection.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as AsistenciaGral;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.asistenciasGenerales;
  }

  agregarAsistenciaGral(asistencia: AsistenciaGral) {
    this.asistenciageneralCollection.add(asistencia);
  }

  getAsistenciaGeneral(id: string): Observable<AsistenciaGral> {
    //recuperar asistencia general de la base de datos
    this.asistenciaGDoc = this.db.doc<AsistenciaGral>(`asistenciasG/${id}`);
    //recuperar objeto tipo asistencia general (observable)
     return this.asistenciaGeneral = this.asistenciaGDoc.snapshotChanges().pipe(
      map( accion=> {
        if (accion.payload.exists === false) {
          return null;
        }
        else {
          const datos: AsistenciaGral = accion.payload.data();
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    );


  }

  modificarAsistenciaGral(asistencia: AsistenciaGral){
      this.asistenciaGDoc = this.db.doc(`asistenciasG/${asistencia.id}`);
      this.asistenciaGDoc.update(asistencia);
  }

  eliminarAsistenciaGeneral(asistencia: AsistenciaGral){
    this.asistenciaGDoc = this.db.doc(`asistenciasG/${asistencia.id}`);
    this.asistenciaGDoc.delete();
  }
}
