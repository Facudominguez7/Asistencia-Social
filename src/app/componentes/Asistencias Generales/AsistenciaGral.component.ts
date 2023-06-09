import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AsistenciaGral } from 'src/app/modelo/AsistenciaGeneral.model';
import { AsistenciaGeneralServicio } from 'src/app/servicios/AsistenciaGeneral.service';



@Injectable()
@Component({
  selector: 'app-AsistenciasGenerales',
  templateUrl: './AsistenciaGral.component.html',
  styleUrls: ['./AsistenciaGral.component.css']
})
export class AsistenciaGeneralComponent implements OnInit{
  asistenciasGrales?: AsistenciaGral[];
  asistenciaGral: AsistenciaGral = {
    nombre: '',
    direccion: '',
    descripcion: '',
    dni: null,
    numTelefono: null,
    ubicacion: '',
    fecha: '',
    tipoAsistencia: '',


  };

  busqueda: number;
  asistenciasGralesFiltrados: AsistenciaGral[];

  @ViewChild("asistenciagralForm") asistenciagralForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private asistenciaServicio: AsistenciaGeneralServicio,
              private flashMessages: FlashMessagesService ){

  }
  ngOnInit() {
    this.asistenciaServicio.getAsistenciasGenerales().subscribe(
      asistenciasGrales => {
        this.asistenciasGrales = asistenciasGrales;
        this.asistenciasGralesFiltrados = asistenciasGrales;
      }
    )
  }

  buscar(){
    this.asistenciaServicio.buscarAsistenciaGeneralPorDni(this.busqueda)
    .subscribe((asistenciasGrales) => (this.asistenciasGralesFiltrados = asistenciasGrales));
  }

  agregarAsistenciaGral(asistenciagralForm: NgForm){

    if(!asistenciagralForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar la nueva asistencia general
      this.asistenciaServicio.agregarAsistenciaGral(asistenciagralForm.value);
      this.asistenciagralForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}


