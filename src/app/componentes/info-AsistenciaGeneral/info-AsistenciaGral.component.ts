import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
import { AsistenciaGral } from 'src/app/modelo/AsistenciaGeneral.model';
import { AsistenciaGeneralServicio } from 'src/app/servicios/AsistenciaGeneral.service';


@Component({
  selector: 'app-info-merendero',
  templateUrl: './info-AsistenciaGral.component.html',
  styleUrls: ['./info-AsistenciaGral.component.css'],
})
export class InfoAsistenciaGralComponent {
  asistenciasGrales?: AsistenciaGral[];
  asistenciaGral: AsistenciaGral = {
    nombre: '',
    direccion: '',
    descripcion: '',
    dni: 0,
    numTelefono: 0,
    ubicacion: '',
    fecha: '',
    tipoAsistencia: '',


  };
  id: string;

  constructor(
    private asistenciagralServicio: AsistenciaGeneralServicio,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild('asistenciagralForm') asistenciagralForm: NgForm;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //recuperar asistencia general con su respectivo id
    this.asistenciagralServicio.getAsistenciaGeneral(this.id).subscribe((asistenciaGral) => {
      this.asistenciaGral = asistenciaGral;
    });
  }

  guardar(asistenciagralForm: NgForm, event: Event) {
    event.preventDefault();
    asistenciagralForm.value.id = this.id;
    //modificar el comedor
    this.asistenciagralServicio.modificarAsistenciaGral(asistenciagralForm.value);

  }

  generarPDF() {
    const element = document.getElementById('info') as HTMLTextAreaElement;
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

      doc.save(`Información de Asistencia.pdf`);
    }
  }
}
