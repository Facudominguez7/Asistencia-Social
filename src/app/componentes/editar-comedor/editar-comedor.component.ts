import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';

@Injectable()
@Component({
  selector: 'app-editar-comedor',
  templateUrl: './editar-comedor.component.html',
  styleUrls: ['./editar-comedor.component.css'],
})
export class EditarComedorComponent implements OnInit {
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
    actividadRealiza: '',
    insumos: '',


  };

  id:string;
  @ViewChild("comedorForm") comedorForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(
    private comedoresServicio: ComdeorServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
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
  }

  guardar(comedorForm: NgForm){
    if(!comedorForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      comedorForm.value.id = this.id;
      //modificar el comedor
      this.comedoresServicio.modificarComedor(comedorForm.value);
      this.router.navigate(['/']);

    }
  }

  editarDescripcion(comedorForm: NgForm){

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



  eliminar(){
    if(confirm('Seguro que desea eliminar el comedor?')){
      this.comedoresServicio.eliminarComedor(this.comedor);
      this.router.navigate(['/']);
    }
  }
}
