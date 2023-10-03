import { Injectable } from '@angular/core';
import { HornosHuertas } from '../modelo/hornos-huertas.model';
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
export class HornosHuertasService {
  HornosHuertasColeccion: AngularFirestoreCollection<HornosHuertas>;
  HornoHuertaDoc: AngularFirestoreDocument<HornosHuertas>;
  HornoHuertas: Observable<HornosHuertas[]>;
  hornohuerta!: Observable<HornosHuertas>;

  //Metodo conectar base de datos
  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    //recuperar coleccion de bajas
    this.HornosHuertasColeccion = db.collection('hornos-huertas', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }
  //Método buscar
  buscarHornoHuertaPorNombre(nombre: string): Observable<HornosHuertas[]> {
    const queryFn: QueryFn = (ref) =>
      ref
        .where('nombre', '>=', nombre)
        .where('nombre', '<=', nombre + '\uf8ff');
    return this.db
      .collection<HornosHuertas>('hornos-huertas', queryFn)
      .valueChanges({ idField: 'id' });
  }

  buscarHornoHuertaPorDni(dni: string): Observable<HornosHuertas[]> {
    const queryFn: QueryFn = (ref) =>
      ref.where('dni', '>=', dni).where('dni', '<=', dni + '\uf8ff');
    return this.db
      .collection<HornosHuertas>('hornos-huertas', queryFn)
      .valueChanges({ idField: 'id' });
  }

  //Solicitud datos de bajas pidiendo id (regresa objeto de tipo baja)
  getHornoHuertas(): Observable<HornosHuertas[]> {
    //Obtener los bajas
    this.HornoHuertas = this.HornosHuertasColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as HornosHuertas;
          datos.id = accion.payload.doc.id;
          return datos;
        });
      })
    );
    return this.HornoHuertas;
  }

  modificarHornoHuerta(hornohuerta: HornosHuertas){
    this.HornoHuertaDoc = this.db.doc(`hornos-huertas/${hornohuerta.id}`);
    this.HornoHuertaDoc.update(hornohuerta);
}

  agregarHornoHuerta(hornohuerta: HornosHuertas) {
    this.HornosHuertasColeccion.add(hornohuerta);
  }

  getHornoHuerta(id: string): Observable<HornosHuertas> {
    //recuperar de la base de datos
    this.HornoHuertaDoc = this.db.doc<HornosHuertas>(`hornos-huertas/${id}`);
    //recuperar objeto tipo HornosHuertas (observable)
    return (this.hornohuerta = this.HornoHuertaDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos: HornosHuertas = accion.payload.data();
          datos.id = accion.payload.id;
          return datos as any;
        }
      })
    ));
  }

  eliminarBaja(hornohuerta: HornosHuertas) {
    let collectionRef = this.db.collection('hornos-huertas');

    let id = hornohuerta.id;

    collectionRef.doc(id).delete();
  }


}
