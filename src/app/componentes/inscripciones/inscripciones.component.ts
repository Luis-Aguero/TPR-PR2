import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from '../../models/Inscripcion';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionAlumnoService } from '../../services/inscripcion-alumno.service';
 
@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css'
})
export class InscripcionesComponent {
  datosTabla: Inscripcion[] = [];

  constructor(private modalService: NgbModal, private servicio: InscripcionAlumnoService) {
    servicio.get().pipe().subscribe((data) => {
      this.datosTabla = data;
    })
  } 

  nuevoRegistro(): void {
    this.modificarRegistro({
      idInscripcion: 0,
      ano_Letivo: 0,
      estado_Inscripcion: '',
      fech_Inscripcion: "2022-01-14",
      monto_Matricula: 0,
      descuento: 0,
      id_Alumno:0,
      idCurso:0
    }, -1);
  }

  modificarRegistro(arg: Inscripcion, id: number): void {
    const ventana = this.modalService.open(InscripcionComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    ventana.componentInstance.title = 'Formulario de Inscripcion';
    ventana.componentInstance.arg = arg
    ventana.result.then((result) => {
      if (id == -1) {
        this.datosTabla.push(result)
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
    const ventana = this.modalService.open(InscripcionComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    ventana.componentInstance.title = 'Formulario de Inscripcion';
    ventana.componentInstance.arg = arg
    ventana.result.then((result) => {
      if (id == -1) {
        this.datosTabla.push(result)
      } else {
        this.datosTabla[id] = result
      }

    }).catch((reason) => {
      console.log(`Motivo de cierre del modal: ${reason}`);
    });
  }  

}
