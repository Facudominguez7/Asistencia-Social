import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';

@Component({
  selector: 'app-comedores',
  templateUrl: './comedores.component.html',
  styleUrls: ['./comedores.component.css']
})
export class ComedoresComponent implements OnInit{
  comedores?: Comedor[];
  comedor: Comedor = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: '',
    numTelefono: '',
    diahorarioCocina: '',
    ubicacion: '',


  };
  busqueda: string;
  comedoresFiltrados: Comedor[];

  @ViewChild("comedorForm") comedorForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private comedoresServicio: ComdeorServicio,
              private flashMessages: FlashMessagesService ){

  }
  ngOnInit() {
    this.comedoresServicio.getComedores().subscribe(
      comedores => {
        this.comedores = comedores;
        this.comedoresFiltrados = comedores;
      }
    );
  }

  buscar(){
    this.comedoresServicio.buscarComedorPorNombre(this.busqueda)
    .subscribe((comedores) => (this.comedoresFiltrados = comedores));
  }

  agregar(comedorForm: NgForm){

    if(!comedorForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo comedor
      this.comedoresServicio.agregarComedor(comedorForm.value);
      this.comedorForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
