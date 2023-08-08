import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { ToastrService } from 'ngx-toastr';
import { Baja } from 'src/app/modelo/bajas.model';
import { BajasService } from 'src/app/servicios/bajas.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-editar-bajas',
  templateUrl: './editar-bajas.component.html',
  styleUrls: ['./editar-bajas.component.css']
})
export class EditarBajasComponent {
  usuariologueado: string;
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

  id:string;
  @ViewChild("bajaForm") bajaForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;

  constructor(
    private bajaServicio: BajasService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private confirmService: NgConfirmService
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    //recuperar asistencia general con su respectivo id
    this.bajaServicio.getBaja(this.id).subscribe(baja => {
      this.baja = baja;
    });

    this.bajaServicio.getBajas().subscribe(
      bajas => {
        this.bajas = bajas;
      }
    )
    this.loginService.getusuarioIdentificado().subscribe( auth => {
      if(auth){
        this.usuariologueado = auth.email ?? '';
      }
    })

  }

  guardar(bajaForm: NgForm){
    if(!bajaForm.valid){
      this.toastr.error("Por favor llena el formulario correctamente", "Error")
     return;
    }
    else{
      bajaForm.value.id = this.id;
      //modificar la baja
      this.bajaServicio.modificarBaja(bajaForm.value);
      this.router.navigate(['bajas']);

    }
  }

  eliminar(){
    this.confirmService.showConfirm("Estas seguro que deseas eliminar?",
    () =>{
      this.bajaServicio.eliminarBaja(this.baja);
      this.router.navigate(["/bajas"]);

    },
    ()=>{

      this.router.navigate(["/baja/editar/:id"]);

    })

  }

}
