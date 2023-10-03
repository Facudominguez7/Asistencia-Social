import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { AsistenciaGral } from 'src/app/modelo/AsistenciaGeneral.model';
import { AsistenciaGeneralServicio } from 'src/app/servicios/AsistenciaGeneral.service';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-editar-AsistenciaGral',
  templateUrl: './editar-AsistenciaGral.component.html',
  styleUrls: ['./editar-asistenciaGral.component.css']
})
export class EditarAsistenciaGeneralComponent {
  asistenciasGrales?: AsistenciaGral[];
  usuariologueado: string;
  asistenciaGral: AsistenciaGral = {
    nombre: '',
    direccion: '',
    descripcion: '',
    dni: 0,
    numTelefono: 0,
    ubicacion: '',
    fecha: '',
    tipoAsistencia: '',


  };

  id:string;
  @ViewChild("asistenciagralForm") asistenciagralForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(
    private asistenciasServicio: AsistenciaGeneralServicio,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private confirmService: NgConfirmService
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    //recuperar asistencia general con su respectivo id
    this.asistenciasServicio.getAsistenciaGeneral(this.id).subscribe(asistenciaGral => {
      this.asistenciaGral = asistenciaGral;
    });

    this.asistenciasServicio.getAsistenciasGenerales().subscribe(
      asistenciasGrales => {
        this.asistenciasGrales = asistenciasGrales;
      }
    )
    this.loginService.getusuarioIdentificado().subscribe( auth => {
      if(auth){
        this.usuariologueado = auth.email ?? '';
      }
    })

  }

  guardar(asistenciagralForm: NgForm){
    if(!asistenciagralForm.valid){
      this.toastr.error("Por favor llena el formulario correctamente", "Error")
     return;
    }
    else{
      asistenciagralForm.value.id = this.id;
      //modificar el comedor
      this.asistenciasServicio.modificarAsistenciaGral(asistenciagralForm.value);
      this.router.navigate(['asistenciasGrales']);
      this.toastr.success("Se ha modificado la Asistencia correctamente", "Éxito");

    }
  }

  editarDescripcion(asistenciagralForm: NgForm){

    if(!this.asistenciagralForm.valid){
     this.toastr.error("Por favor llena el formulario correctamente", "Error")
     return;
    }
    else{
      //Agregar la nueva asistencia
      this.asistenciasServicio.agregarAsistenciaGral(this.asistenciagralForm.value);
      this.asistenciagralForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }



  eliminar(){
    this.confirmService.showConfirm("Estas seguro que deseas eliminar?",
    () =>{
      this.asistenciasServicio.eliminarAsistenciaGeneral(this.asistenciaGral);
      this.router.navigate(["/asistenciasGrales"]);
      this.toastr.success("Se ha eliminado la Asistencia correctamente", "Éxito");

    },
    ()=>{

      this.router.navigate(["/asistenciaGral/editar/:id"]);

    })
  }

}
