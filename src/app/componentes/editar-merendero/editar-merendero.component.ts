import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Merendero } from 'src/app/modelo/merendero.model';
import { MerenderoServicio } from 'src/app/servicios/merendero.service';

@Component({
  selector: 'app-editar-merendero',
  templateUrl: './editar-merendero.component.html',
  styleUrls: ['./editar-merendero.component.css']
})
export class EditarMerenderoComponent {
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

  id:string;
  @ViewChild("merenderoForm") merenderoForm: NgForm;
  @ViewChild("botonCerrar") botonCerrar: ElementRef;


  constructor(
    private merenderosServicio: MerenderoServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.merenderosServicio.getMerendero(this.id).subscribe(merendero => {
      this.merendero = merendero;
    });

    this.merenderosServicio.getMerenderos().subscribe(
      merenderos => {
        this.merenderos = merenderos;
      }
    )
  }

  guardar(merenderoForm: NgForm){
    if(!merenderoForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      merenderoForm.value.id = this.id;
      //modificar el comedor
      this.merenderosServicio.modificarMerendero(merenderoForm.value);
      this.router.navigate(['/merenderos']);

    }
  }

  editarDescripcion(merenderosForm: NgForm){

    if(!this.merenderoForm.valid){
      this.flashMessages.show('Por favor llena el formulario correctamente', {
        cssClass: 'alert-danger', timeout: 4000
      });
    }
    else{
      //Agregar el nuevo comedor
      this.merenderosServicio.agregarMerendero(this.merenderoForm.value);
      this.merenderoForm.resetForm();
      this.cerrarModal();

    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }



  eliminar(){
    if(confirm('Seguro que desea eliminar el merendero?')){
      this.merenderosServicio.eliminarMerendero(this.merendero);
      this.router.navigate(['/merenderos']);
    }
  }

}
