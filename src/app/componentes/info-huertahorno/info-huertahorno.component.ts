import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { ToastrService } from 'ngx-toastr';
import { HornosHuertas } from 'src/app/modelo/hornos-huertas.model';
import { HornosHuertasService } from 'src/app/servicios/Hornos-huertas.service';

@Component({
  selector: 'app-info-huertahorno',
  templateUrl: './info-huertahorno.component.html',
  styleUrls: ['./info-huertahorno.component.css'],
})
export class InfoHuertahornoComponent implements OnInit {
  hornohuertas?: HornosHuertas[];
  hornohuerta: HornosHuertas = {
    nombre: '',
    direccion: '',
    descripcion: '',
    nombreRes: '',
    dni: null,
    numTelefono: null,
    ubicacion: '',
    actividadRealiza: '',
  };
  id: string;

  constructor(
    private hornoshuertasServicio: HornosHuertasService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //Recuperar baja con su respectivo id
    this.hornoshuertasServicio.getHornoHuerta(this.id).subscribe((hornohuerta) => {
      this.hornohuerta = hornohuerta;
    });
  }

  guardar(hornohuertaForm: NgForm, event: Event) {
    event.preventDefault();
    hornohuertaForm.value.id = this.id;
    //Modificar la baja
    this.hornoshuertasServicio.modificarHornoHuerta(hornohuertaForm.value);
    this.toastr.success('Se ha guardado correctamente', 'Exito');
    return;
  }

  generarPDF() {
    const element = document.getElementById(
      'info descripcion'
    ) as HTMLTextAreaElement;
    const ulElement = document.getElementById('ul-info');

    const doc = new jsPDF('p', 'pt', 'a4');

    if (ulElement && element) {
      const bufferX = 15;
      const bufferY = 15;
      const lineHeight = doc.getLineHeight() / doc.internal.scaleFactor;
      let startY = bufferY;
      let currentPage = 1;

      function encabezado() {
        doc.setFontSize(16);
        doc.setFont('fontFamily', 'fontStyle');
        doc.text(
          'Director Rolando Olmedo' +
            '                                                     ' +
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
      const liElements = Array.from(
        ulElement.getElementsByTagName('li')
      ) as HTMLLIElement[];
      let pdfWidth: number = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = doc.internal.pageSize.getHeight() - 20;

      for (let li of liElements) {
        const text = li.textContent || '';
        const lines = doc.splitTextToSize(text, pdfWidth);

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