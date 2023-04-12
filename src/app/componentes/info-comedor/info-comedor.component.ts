import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info-comedor',
  templateUrl: './info-comedor.component.html',
  styleUrls: ['./info-comedor.component.css'],
})
export class InfoComedorComponent implements OnInit {
  comedores?: Comedor[];
  comedor: Comedor = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: '',
    numTelefono: '',
    diahorarioCocina: '',
  };
  id: string;


  constructor(
    private comedoresServicio: ComdeorServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.comedoresServicio.getComedor(this.id).subscribe((comedor) => {
      this.comedor = comedor;

    });
  }

  guardar(comedorForm: NgForm) {
    comedorForm.value.id = this.id;
    //modificar el comedor
    this.comedoresServicio.modificarComedor(comedorForm.value);
    this.router.navigate(['/']);
  }
}
