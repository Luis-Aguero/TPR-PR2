import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from '../../models/Inscripcion';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionAlumnoService } from '../../services/inscripcion-alumno.service';
import { ReportesComponent } from '../reportes/reportes.component';
import { DomSanitizer } from '@angular/platform-browser';
 
@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent {
  datosTabla: Inscripcion[] = [];

  constructor(private modalService: NgbModal, 
              private servicio: InscripcionAlumnoService,
              private sanitezer: DomSanitizer) {
    servicio.get().pipe().subscribe((data) => {
      console.log(data);
      this.datosTabla = data;
    })
  } 

  nuevoRegistro(): void {
    this.modificarRegistro({
      idinscripcion: 0,
      anoLectivo: 0,
      estado_Inscripcion: 'Inscripto',
      fecha_Inscripcion: "2022-01-14",
      monto_Matricula: 500000,
      descuento: 0,
      alumno:{id_Alumno: 0,	nomb_A: "",	apellido_A: "",	fech_Nac: "",	direc_A: "",	estado_A: "",	cedula: ""},
      curso:{idCurso:0, ciclo:"", especializacion:"", estado:"", arancel:0, turno:0, grado:"",  nivel:""}
    }, -1);
  }

  modificarRegistro(arg: Inscripcion, id: number): void {
    const ventana = this.modalService.open(InscripcionComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    ventana.componentInstance.title = 'Formulario de Inscripcion';
    ventana.componentInstance.arg = arg
    ventana.result.then((result) => {
      if (id == -1) {
      //  this.datosTabla.push(result)
      this.servicio.get().pipe().subscribe((data) => {
        this.datosTabla = data;
      })
      } else {
        this.datosTabla[id] = result
      }

    }).catch((reason) => {
      console.log(`Motivo de cierre del modal: ${reason}`);
    });
  }

  eliminarRegistro(indice: number): void {
    this.servicio.del(this.datosTabla[indice]).pipe().subscribe(
      (dato) => {
        console.log(dato);
        this.datosTabla.splice(indice, 1);
      }
    );
  }

  imprimirContrato(arg: Inscripcion, id: number): void {
    
    console.log(arg.idinscripcion)
    this.servicio.ContratoPdf(arg.idinscripcion).pipe().subscribe(
      (pdf) => {
        const ventana = this.modalService.open(ReportesComponent, { ariaLabelledBy: 'modal-basic-title', size: 'xl' });
        const url = URL.createObjectURL(pdf);
        ventana.componentInstance.title = 'Impresion de Contrato'; 
        ventana.componentInstance.pdfUrl = this.sanitezer.bypassSecurityTrustResourceUrl(url);         
      },
      (error) => {
        console.log("Errror", error);
      }
    );    
  }  

}
