import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';

@Component({
  selector: 'app-insumo-comedor',
  templateUrl: './insumo-comedor.component.html',
  styleUrls: ['./insumo-comedor.component.css']
})
export class InsumoComedorComponent implements OnInit{

  comedores?: Comedor[];
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
  id: string;





  constructor(
    private comedoresServicio: ComdeorServicio,
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



  guardar(comedorForm: NgForm, event: Event) {
    event.preventDefault();
    comedorForm.value.id = this.id;
    //modificar el comedor
    this.comedoresServicio.modificarComedor(comedorForm.value);
  }





  generarPDFNotas() {
    // Obtener el contenido del textarea
    const element = document.getElementById('info') as HTMLTextAreaElement;
    const ulElement = document.getElementById('ul-info');

    if (element && ulElement) {
      // Obtener las líneas del textarea
      const lines = element.value.split('\n');

      // Obtener la lista en formato de texto
      const liElements = ulElement.querySelectorAll('li');
      const listText = Array.from(liElements)
        .map((li) => '- ' + li.textContent)
        .join('\n');

      // Crear un nuevo documento PDF
      const doc = new jsPDF();

      // Configurar los márgenes y la altura de línea
      const lineHeight = 10; // Altura de línea
      const topMargin = 10; // Margen superior
      const bottomMargin = 10; // Margen inferior
      const pageHeight = doc.internal.pageSize.height;

      // Si el contenido no cabe en una sola página, agregar más páginas
      let y = topMargin;

      // Agregar la lista al documento
      doc.text(listText, 10, y);

      // Actualizar la posición vertical de la página
      y += lineHeight * (liElements.length + 1);

      // Agregar las líneas del textarea al documento
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

      // Guardar el documento PDF
      doc.save('Informacion de comedor');
    } else {
      console.error('Elemento "info" o "ul-info" no encontrado');
    }
  }


}
