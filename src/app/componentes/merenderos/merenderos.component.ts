import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Merendero } from 'src/app/modelo/merendero.model';
import { MerenderoServicio } from 'src/app/servicios/merendero.service';



@Component({
  selector: 'app-merenderos',
  templateUrl: './merenderos.component.html',
  styleUrls: ['./merenderos.component.css']
})
export class MerenderoComponent implements OnInit{
  merenderos?: Merendero[];
  merendero: Merendero = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: '',
    numTelefono: '',
    diahorarioCocina: '',


  };

  busqueda: string;
  merenderosFiltrados: Merendero[];

  @ViewChild("merenderoForm") merenderoForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private merenderoServicio: MerenderoServicio,
              private flashMessages: FlashMessagesService ){

  }
  ngOnInit() {
    this.merenderoServicio.getMerenderos().subscribe(
      merenderos => {
        this.merenderos = merenderos;
        this.merenderosFiltrados = merenderos;
      }
    )
  }

  buscar(){
    this.merenderoServicio.buscarComedorPorNombre(this.busqueda)
    .subscribe((merenderos) => (this.merenderosFiltrados = merenderos));
  }

  agregarMerendero(merenderoForm: NgForm){

    if(!merenderoForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo merendero
      this.merenderoServicio.agregarMerendero(merenderoForm.value);
      this.merenderoForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}


