import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { InscripcionAlumnoService } from '../../services/inscripcion-alumno.service';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from '../../models/Inscripcion';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css'
})
export class ReportesComponent implements OnInit {
  @Input() title: string = ''; 

  @Input() pdfUrl: SafeResourceUrl | null = null;
  constructor(public activeModal: NgbActiveModal){

   this.loadPdf();
  }

  ngOnInit(): void{
    this.loadPdf();
  }

  public loadPdf(): void { 

  }
}
