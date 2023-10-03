import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
    dni: null,
    numTelefono: null,
    diahorarioCocina: '',
    ubicacion: '',
    actividadRealiza: '',
    insumos: '',



  };
  busqueda: string;
  busquedaDni: string;
  comedoresFiltrados: Comedor[];

  @ViewChild("comedorForm") comedorForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private comedoresServicio: ComdeorServicio,
    private toastr: ToastrService, ){

  }
  ngOnInit() {
    this.comedoresServicio.getComedores().subscribe(
      comedores => {
        this.comedores = comedores;
        this.comedoresFiltrados = comedores;
        console.log(this.comedores)
      }
    );
  }

  buscar(){
    this.comedoresServicio.buscarComedorPorNombre(this.busqueda)
    .subscribe((comedores) => (this.comedoresFiltrados = comedores));
}
buscarPorDni(){
  this.comedoresServicio.buscarComedorPorDni(this.busquedaDni)
  .subscribe((comedores) => (this.comedoresFiltrados = comedores));
}

  agregar(comedorForm: NgForm){

    if(!comedorForm.valid){
      this.toastr.error("Debe llenar el Formulario", "Error")
      return;
    }
    else{
      //Agregar el nuevo comedor
      this.comedoresServicio.agregarComedor(comedorForm.value);
      this.comedorForm.resetForm();
      this.cerrarModal();
      this.toastr.success("Se ha agregado un Comedor / Merendero correctamente", "Éxito");

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
