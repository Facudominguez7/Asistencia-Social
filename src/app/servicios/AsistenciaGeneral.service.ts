import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { AsistenciaGral } from '../modelo/AsistenciaGeneral.model';


@Injectable()
export class AsistenciaGeneralServicio {
  asistenciageneralColleccion: AngularFirestoreCollection<AsistenciaGral>;
  asistenciaGDoc: AngularFirestoreDocument<AsistenciaGral>;
  asistenciasGenerales: Observable<AsistenciaGral[]>;
  asistenciaGeneral!: Observable<AsistenciaGral>;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore) {
    //recuperar coleccion de comedores
    this.asistenciageneralColleccion = db.collection('asistenciageneral', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

  buscarAsistenciaGeneralPorDni(dni: number): Observable<AsistenciaGral[]> {
    const dniStr = dni.toString();
    const queryFn: QueryFn = (ref) =>
      ref.where('dni', '>=', dniStr).where('dni', '<=', dniStr + '\uf8ff');
    return this.db
      .collection<AsistenciaGral>('asistenciageneral', queryFn)
      .valueChanges({ idField: 'id' });
  }
  //Solicitud datos de asistencias generales pidiendo id (regresa objeto de tipo asistencia general)
  getAsistenciasGenerales(): Observable<AsistenciaGral[]> {
    //Obtener las Asistencias Generales
    this.asistenciasGenerales = this.asistenciageneralColleccion.snapshotChanges().pipe(
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
    this.asistenciageneralColleccion.add(asistencia);
  }

  getAsistenciaGeneral(id: string): Observable<AsistenciaGral> {
    //recuperar asistencia general de la base de datos
    this.asistenciaGDoc = this.db.doc<AsistenciaGral>(`asistenciageneral/${id}`);
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
      this.asistenciaGDoc = this.db.doc(`asistenciageneral/${asistencia.id}`);
      this.asistenciaGDoc.update(asistencia);
  }

  eliminarAsistenciaGeneral(asistencia: AsistenciaGral){
    this.asistenciaGDoc = this.db.doc(`asistenciageneral/${asistencia.id}`);
    this.asistenciaGDoc.delete();
  }
}
