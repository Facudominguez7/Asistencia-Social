import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Comedor } from 'src/app/modelo/comedor.model';
import { ComdeorServicio } from 'src/app/servicios/comedor.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import { type } from 'os';

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
    ubicacion: '',
    actividadRealiza: '',
    insumos: '',
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
      doc.save('Informacion de comedor / merendero');
    } else {
      console.error('Elemento "info" o "ul-info" no encontrado');
    }
  }

  /*generarPdf(){
    const informacionComedor = document.getElementById('info descripcion');
    const elementoLista = document.getElementById('ul-info');
    const opciones = {
      margin: 1,
      image: {type: 'png' , quality: 0.98},
      filename: "Información de Comedor / Merendero" + ".pdf",
      html2canvas: {scale: 3},
      jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait' },
      autoPaging: true,
      pagebreak: {mode: 'avoid-all'}
    }
    html2pdf().set(opciones).from(informacionComedor).save();
    html2pdf().set(opciones).from(elementoLista).save();
  }*/

  /*generarPDF() {
    const element = document.getElementById(
      'info descripcion'
    ) as HTMLTextAreaElement;
    const ulElement = document.getElementById('ul-info');
    

    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      margin: 1,
      image: {type: 'png', quality: 0.98},
      scale: 3,
      jsPDF: {unit: 'in', format: 'a4', orientation: 'portrait'},
      autoPaging: true,
      pagebreak: {mode: 'avoid-all', before: '#descripcion'}
    };

    
    if (ulElement && element) {

      



      html2canvas(ulElement, options)
        .then((canvas) => {
          const img = canvas.toDataURL('image/PNG');
          

          //Agregar imagen canvas a pdf
          const bufferX = 15;
          const bufferY = 15;
          const imgProps = (doc as any).getImageProperties(img);
          const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
          let pdfHeigth = (imgProps.height * pdfWidth) / imgProps.width;
          let currentPage = 1;

          
          
        
          doc.setFontSize(16);
          doc.setFont('fontFamily', 'fontStyle' );
          doc.text("Director Rolando Olmedo" + "                                    "+ "Direccion General de Asistencia Social", bufferX, bufferY -1);
          doc.addImage(
            img,
            'PNG',
            bufferX,
            bufferY,
            pdfWidth,
            pdfHeigth,
            undefined,
            'FAST'
          );
          
          //Agregar el contenido de "ul-info"
          const ulOptions = {
            y: bufferY + pdfHeigth + 20
          };
          doc.setFontSize(12);
          const liElements = ulElement.getElementsByTagName('li');
          let startY = ulOptions.y;
          let remainingHeight = doc.internal.pageSize.getHeight() - 

          // Agregar el texto de "info descripcion" como un elemento de texto separado en el PDF
          const text = element.value;
          let lines  = doc.splitTextToSize(text, pdfWidth);
          let lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
          startY = bufferY + pdfHeigth + 20;
          let remainingHeight = doc.internal.pageSize.getHeight() - startY -20;
          doc.setFontSize(12);
          let i = 0;
          if ( i > 0){
            doc.addPage();
            currentPage++;
            startY = bufferY;
            remainingHeight = doc.internal.pageSize.getHeight() - startY -20;
          }
          while (lines.length > 0 && remainingHeight > lineHeight){
            let line = lines.shift();
            doc.text(line, bufferX, startY);
            startY += lineHeight;
            remainingHeight -= lineHeight;
          }

          if(lines.length > 0) {
            doc.addPage();
            currentPage++;
            startY = bufferY;
            remainingHeight = doc.internal.pageSize.getHeight() - startY -20;
          }
          i++;
          

          return doc;
        })
        .then((docResult) => {
          docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
        });
    } else {
      console.error('Elemento "info" o "ul-info" no encontrado');
    }
  }*/
}
