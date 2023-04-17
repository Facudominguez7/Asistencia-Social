import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import jsPDF from 'jspdf';
import { Merendero } from 'src/app/modelo/merendero.model';
import { MerenderoServicio } from 'src/app/servicios/merendero.service';

@Component({
  selector: 'app-info-merendero',
  templateUrl: './info-merendero.component.html',
  styleUrls: ['./info-merendero.component.css'],
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

  constructor(
    private merenderosServicio: MerenderoServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild('merenderoForm') merenderoForm: NgForm;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar comedor con su respectivo id
    this.merenderosServicio.getMerendero(this.id).subscribe((merendero) => {
      this.merendero = merendero;
    });
  }

  guardar(merenderoForm: NgForm, event: Event) {
    event.preventDefault();
    merenderoForm.value.id = this.id;
    //modificar el comedor
    this.merenderosServicio.modificarMerendero(merenderoForm.value);

  }

  generarPDFNotas() {
    // Obtener el contenido del textarea
    const element = document.getElementById('info') as HTMLTextAreaElement;

    if (element) {
      // Obtener las líneas del textarea
      const lines = element.value.split('\n');

      // Crear un nuevo documento PDF
      const doc = new jsPDF();

      // Configurar los márgenes y la altura de línea
      const lineHeight = 10; // Altura de línea
      const topMargin = 10; // Margen superior
      const bottomMargin = 10; // Margen inferior
      const pageHeight = doc.internal.pageSize.height;


      // Si el contenido no cabe en una sola página, agregar más páginas
      let y = topMargin;
      for (let i = 0; i < lines.length; i++) {
        // Dividir la línea en varias líneas que se ajusten al ancho de la página
        const words = doc.splitTextToSize(
          lines[i],
          doc.internal.pageSize.width - 20
        );
        // Agregar las líneas al documento
        for (let j = 0; j < words.length; j++) {
          if (y + lineHeight > pageHeight - bottomMargin) {
            doc.addPage();
            y = topMargin;
          }
          doc.text(words[j], 10, y);
          y += lineHeight;
        }
      }

      /*let y = topMargin;: Aquí se inicializa la variable y con el valor del margen superior, que será la posición en la que se comenzarán a agregar las líneas al documento PDF.

for (let i = 0; i < lines.length; i++) {: Este es un bucle for que recorre cada una de las líneas del arreglo lines.

if (y + lineHeight > pageHeight - bottomMargin) {: Esta línea es una condición que verifica si la altura disponible en la página actual es suficiente para agregar la siguiente línea. Si la altura no es suficiente, entonces se agrega una nueva página al documento y se reinicia la variable y al valor del margen superior.

doc.text(lines[i], 10, y);: Aquí se agrega la línea actual del textarea al documento PDF en la posición x=10 (10 unidades desde el borde izquierdo de la página) y y, que es la posición actual calculada en función del margen superior, el alto de línea y la cantidad de líneas que ya han sido agregadas.

y += lineHeight;: Finalmente, se incrementa el valor de y en la altura de línea, para que la siguiente línea sea agregada a la posición correcta en la página actual o en la siguiente si no hay espacio suficiente en la página actual.*/

      // Guardar el documento PDF
      doc.save('Informacion de merendero');
    } else {
      console.error('Elemento "info" no encontrado');
    }
  }
}
