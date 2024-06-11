import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InscripcionAlumnoService } from '../../services/inscripcion-alumno.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit {
  pdfUrl: SafeResourceUrl | null = null;
  constructor(private sanitezer: DomSanitizer, private servicio: InscripcionAlumnoService){}

  ngOnInit(): void{
    this.loadPdf();
  }

  loadPdf(): void {
    this.servicio.ContratoPdf(1).subscribe(
      (pdf) => {
        const url = URL.createObjectURL(pdf);
        this.pdfUrl = this.sanitezer.bypassSecurityTrustResourceUrl(url);
      },
      (error) => {
        console.log("Errror", error);
      }
    );
  }
}
