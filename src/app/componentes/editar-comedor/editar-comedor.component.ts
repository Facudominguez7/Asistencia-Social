import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';
import { LoginService } from 'src/app/servicios/login.service';
import {  NgConfirmService } from 'ng-confirm-box';

@Injectable()
@Component({
  selector: 'app-editar-comedor',
  templateUrl: './editar-comedor.component.html',
  styleUrls: ['./editar-comedor.component.css'],
})
export class EditarComedorComponent implements OnInit {
  comedores?: Comedor[];
  usuariologueado: string;
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

  delete: boolean = false;

  id:string;
  @ViewChild("comedorForm") comedorForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(
    private comedoresServicio: ComdeorServicio,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private confirmService: NgConfirmService
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.comedoresServicio.getComedor(this.id).subscribe(comedor => {
      this.comedor = comedor;
    });

    this.comedoresServicio.getComedores().subscribe(
      comedores => {
        this.comedores = comedores;
      }
    )
    this.loginService.getusuarioIdentificado().subscribe( auth => {
      if(auth){
        this.usuariologueado = auth.email ?? '';
      }
    })
  }

  guardar(comedorForm: NgForm){
    if(!comedorForm.valid){
     this.toastr.error("Por favor llena el formulario correctamente", "Error")
     return;
    }
    else{
      comedorForm.value.id = this.id;
      //modificar el comedor
      this.comedoresServicio.modificarComedor(comedorForm.value);
      this.router.navigate(['/']);
      this.toastr.success("Se ha modificado el Comedor / Merendero correctamente", "Éxito");

    }
  }

  editarDescripcion(comedorForm: NgForm){

    if(!comedorForm.valid){
      this.toastr.error("Por favor llena el formulario correctamente", "Error");
     return;
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



  eliminar(){
    this.confirmService.showConfirm("Estas seguro que deseas eliminar?",
    () =>{

      this.comedoresServicio.eliminarComedor(this.comedor);
      this.router.navigate(["/"]);
      this.toastr.success("Se ha eliminado el Comedor / Merendero correctamente", "Éxito");

    },
    ()=>{



      this.router.navigate(["/comedor/editar/:id"]);

    })

  }
}
