import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { HornosHuertas } from 'src/app/modelo/hornos-huertas.model';
import { HornosHuertasService } from 'src/app/servicios/Hornos-huertas.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-editar-huertahorno',
  templateUrl: './editar-huertahorno.component.html',
  styleUrls: ['./editar-huertahorno.component.css']
})
export class EditarHuertahornoComponent {

  usuariologueado: string;
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

  id:string;
  @ViewChild("hornohuertaForm") hornohuertaForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  constructor(
    private hornohuertaServicio: HornosHuertasService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private confirmService: NgConfirmService
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    //recuperar asistencia general con su respectivo id
    this.hornohuertaServicio.getHornoHuerta(this.id).subscribe(hornohuerta => {
      this.hornohuerta = hornohuerta;
    });

    this.hornohuertaServicio.getHornoHuertas().subscribe(
      hornohuerta => {
        this.hornoshuertas = hornohuerta;
      }
    )
    this.loginService.getusuarioIdentificado().subscribe( auth => {
      if(auth){
        this.usuariologueado = auth.email ?? '';
      }
    })

  }

  guardar(hornohuertaForm: NgForm){
    if(!hornohuertaForm.valid){
      this.toastr.error("Por favor llena el formulario correctamente", "Error")
     return;
    }
    else{
      hornohuertaForm.value.id = this.id;
      //modificar la baja
      this.hornohuertaServicio.modificarHornoHuerta(hornohuertaForm.value);
      this.toastr.success("Se ha modificado la asistencia correctamente", "Éxito");
      this.router.navigate(['/hornohuerta']);

    }
  }

  eliminar(){
    this.confirmService.showConfirm("Estas seguro que deseas eliminar?",
    () =>{
      this.hornohuertaServicio.eliminarBaja(this.hornohuerta);
      this.router.navigate(["/hornohuerta"]);
      this.toastr.success("Se ha eliminado una Asistencia", "Éxito");

    },
    ()=>{

      this.router.navigate(["/hornohuerta/editar/:id"]);

    })

  }

}
