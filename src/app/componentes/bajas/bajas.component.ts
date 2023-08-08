import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Baja } from 'src/app/modelo/bajas.model';
import { BajasService } from 'src/app/servicios/bajas.service';

@Component({
  selector: 'app-bajas',
  templateUrl: './bajas.component.html',
  styleUrls: ['./bajas.component.css']
})
export class BajasComponent implements OnInit {

  bajas?: Baja[];
  baja: Baja = {
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
  bajasFiltradas: Baja[];

  @ViewChild("bajaForm") bajaForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private bajasServicio: BajasService,
    private toastr: ToastrService,
              ){

  }
  ngOnInit() {
    this.bajasServicio.getBajas().subscribe(
      bajas => {
        this.bajas = bajas;
        this.bajasFiltradas = bajas;
        console.log(bajas);

      }
    );
  }

  buscar(){
    this.bajasServicio.buscarBajaPorNombre(this.busqueda)
    .subscribe((bajas) => (this.bajasFiltradas = bajas));
}
buscarPorDni(){
  this.bajasServicio.buscarBajaPorDni(this.busquedaDni)
  .subscribe((bajas) => (this.bajasFiltradas = bajas));
}

  agregar(bajaForm: NgForm){

    if(!bajaForm.valid){
        this.toastr.error("Debe llenar el formulario", "Error")
        return;
    }
    else{
      //Agregar la nueva baja
      this.bajasServicio.agregarBaja(bajaForm.value);
      this.bajaForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }

}
