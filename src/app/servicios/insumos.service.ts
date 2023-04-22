import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreCollectionGroup,
  AngularFirestoreDocument,
  QueryFn,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comedor } from '../modelo/comedor.model';
import { map } from 'rxjs/operators';
import { Insumo } from '../modelo/insumos.model';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class InsumosServicio {
  insumosColeccion: AngularFirestoreCollectionGroup<Insumo>;
  insumoDoc: AngularFirestoreDocument<Insumo>;
  insumos: Observable<Insumo[]>;
  insumo!: Observable<Insumo>;

  comedorId: string;

  //Metodo conectar base de datos
  constructor(private db: AngularFirestore) {
    this.insumosColeccion = this.db.collectionGroup('insumos', (ref) =>
      ref.orderBy('nombre' , 'asc')
    );
  }


  getInsumos(): Observable<Insumo[]> {
    //Recuperar la subcoleccion de insumos del comedor con el id especificado
    this.insumos = this.db.collection<Insumo>('insumos', (ref) =>
      ref.where('comedorId', '==', this.comedorId).orderBy('nombre' , 'asc')
    ).valueChanges();
    return this.insumos;
}

agregarInsumo(comedorId: string, insumo: Insumo) {
  // Crear una referencia al documento del comedor
  const comedorRef = this.db.collection('comedores').doc(comedorId);

  // Agregar el insumo a la subcolección de insumos del comedor
  comedorRef.collection('insumos').add(insumo);
}





















}
