import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Merendero } from 'src/app/modelo/merendero.model';
import { MerenderoServicio } from 'src/app/servicios/merendero.service';

@Component({
  selector: 'app-info-merendero',
  templateUrl: './info-merendero.component.html',
  styleUrls: ['./info-merendero.component.css']
})
export class InfoMerenderoComponent {
  merenderos?: Merendero[];
  merendero: Merendero = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: '',
    numTelefono: '',
    diahorarioCocina: '',
    ubicacion: '',


  };
  id: string;

  constructor (
    private merenderosServicio: MerenderoServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  @ViewChild("merenderoForm") merenderoForm: NgForm;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.merenderosServicio.getMerendero(this.id).subscribe((merendero) => {
      this.merendero = merendero;

    });
  }

  guardar(merenderoForm: NgForm) {
    merenderoForm.value.id = this.id;
    //modificar el comedor
    this.merenderosServicio.modificarMerendero(merenderoForm.value);
    this.router.navigate(['/merenderos']);
  }
}



