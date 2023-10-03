import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HornosHuertas } from 'src/app/modelo/hornos-huertas.model';
import { HornosHuertasService } from 'src/app/servicios/Hornos-huertas.service';

@Component({
  selector: 'app-hornos-huertas',
  templateUrl: './hornos-huertas.component.html',
  styleUrls: ['./hornos-huertas.component.css']
})
export class HornosHuertasComponent implements OnInit{
  hornoshuertas?: HornosHuertas[];
  hornohuerta: HornosHuertas = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: null,
    numTelefono: null,
    ubicacion: '',
    actividadRealiza: '',

  };
  busqueda: string;
  busquedaDni: string;
  hornoshuertasFiltradas: HornosHuertas[];

  @ViewChild("hornohuertaForm") hornohuertaForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(private hornoshuertasServicio: HornosHuertasService,
    private toastr: ToastrService,
              ){

  }
  ngOnInit() {
    this.hornoshuertasServicio.getHornoHuertas().subscribe(
      hornoshuertas => {
        this.hornoshuertas = hornoshuertas;
        this.hornoshuertasFiltradas = hornoshuertas;
        console.log(hornoshuertas);

      }
    );
  }

  buscar(){
    this.hornoshuertasServicio.buscarHornoHuertaPorNombre(this.busqueda)
    .subscribe((hornoshuertas) => (this.hornoshuertasFiltradas = hornoshuertas));
}
buscarPorDni(){
  this.hornoshuertasServicio.buscarHornoHuertaPorDni(this.busquedaDni)
  .subscribe((hornoshuertas) => (this.hornoshuertasFiltradas = hornoshuertas));
}

  agregar(hornohuertaForm: NgForm){

    if(!hornohuertaForm.valid){
        this.toastr.error("Debe llenar el formulario", "Error")
        return;
    }
    else{
      //Agregar la nueva baja
      this.hornoshuertasServicio.agregarHornoHuerta(hornohuertaForm.value);
      this.hornohuertaForm.resetForm();
      this.cerrarModal();
      this.toastr.success("Se ha agregado una Asistencia", "Éxito");

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}
