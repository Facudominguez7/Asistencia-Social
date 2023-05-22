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





   generarPDF() {
    const element = document.getElementById('info descripcion') as HTMLTextAreaElement;
    const ulElement = document.getElementById('ul-info');

    const doc = new jsPDF('p', 'pt', 'a4');

    if (ulElement && element) {
      const bufferX = 15;
      const bufferY = 15;
      const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      let startY = bufferY;
      let currentPage = 1;

      function encabezado(){
        doc.setFontSize(16);
        doc.setFont('fontFamily' , 'fontStyle');
        doc.text(
          'Director Rolando Olmedo' +
          '                                                     '+
          'Dirección de Asistencia Social',
          bufferX,
          startY
        );
        //Ajustar la posición vertical después del encabezado
        startY += lineHeight + 10;
      }

      // Dibujar el encabezado en la primera página
      encabezado();

      // Agregar el contenido de "ul-info"
      const liElements = Array.from(ulElement.getElementsByTagName('li')) as HTMLLIElement[];
      let pdfWidth: number = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = doc.internal.pageSize.getHeight() - 20;

      for (let li of liElements) {
          const text = li.textContent || '';
          const lines = doc.splitTextToSize(text, pdfWidth);

          for(let line of lines) {
            if(startY + lineHeight > pdfHeight) {
              doc.addPage();
              currentPage++;
              startY = bufferY;
              encabezado();
            }

            doc.setFontSize(12);
            doc.text(line, bufferX, startY + lineHeight);
            startY += lineHeight;
          }
      }

      // Agregar el texto de "info descripcion" como un elemento de texto separado en el PDF
      const text = element.value;
      pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const lines = doc.splitTextToSize(text, pdfWidth);

      startY += lineHeight + 10;

      for (let line of lines) {
        if (startY + lineHeight > pdfHeight) {
          doc.addPage();
          currentPage++;
          startY = bufferY;
          encabezado();
        }

        doc.setFontSize(12);
        doc.text(line, bufferX, startY + lineHeight);
        startY += lineHeight;
      }

      //Actualizar el encabezado en la primera página
      doc.setPage(1);
      startY = bufferY;
      encabezado();

      doc.save(`Información de Comedor / Merendero.pdf`);
    }
  }

}
