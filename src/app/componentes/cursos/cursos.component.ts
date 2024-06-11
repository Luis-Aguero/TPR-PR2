import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/Curso';
import { CrusoComponent } from './cruso/cruso.component';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  datosTabla: Curso[] = [];

  constructor(private modalService: NgbModal, private servicio: CursoService) {
    servicio.get().pipe().subscribe((data) => {
      this.datosTabla = data;
    })
  }

  nuevoRegistro(): void {
    this.modificarRegistro({
      idCurso:0,
      nivel:'',
      ciclo:'',
      especializacion:'',
      estado_C:'',
      periodo:'',
      arancel:0,
      turno:'Mañana'
    }, -1);
  }

  modificarRegistro(arg: Curso, id: number): void {
    const ventana = this.modalService.open(CrusoComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
    ventana.componentInstance.title = 'Ficha Cursos';
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
}
