import { Component, Input, OnInit } from '@angular/core';
import { Inscripcion } from '../../../models/Inscripcion';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InscripcionAlumnoService } from '../../../services/inscripcion-alumno.service';
import { CommonModule } from '@angular/common';
import { ClienteAlumnoService } from '../../../services/cliente-alumno.service';
import { ItemComboBox } from '../../combo-box/Item';
import { ComboBoxComponent } from '../../combo-box/combo-box.component';
import { CursoService } from '../../../services/curso.service';
import { formatDate } from '../../../services/fecha';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ComboBoxComponent],
  templateUrl: './inscripcion.component.html',
  styleUrl: './inscripcion.component.css'
})
export class InscripcionComponent implements OnInit {
  @Input() title: string = '';
  @Input() arg?: Inscripcion;
  errorMessage: string | null = null;
  formulario: FormGroup;
  comboAlumnos: ItemComboBox[] = [];
  comboCursos: ItemComboBox[] = [];
  comboEstado: ItemComboBox[] = [{id:"Inscripto", descripcion:"Inscripto"}, {id:"Cancelado", descripcion:"Cancelado"}];

  constructor(public activeModal: NgbActiveModal,
    public servicio: InscripcionAlumnoService,
    public servicioAlumno: ClienteAlumnoService,
    public servicioCurso: CursoService
  ) {
    this.formulario = new FormGroup({});
    this.servicioAlumno.getAlumnos().subscribe((datos) => {
      this.comboAlumnos = datos.map(alumno => ({ id: alumno.id_Alumno, descripcion: alumno.nomb_A })); 
    })
    this.servicioCurso.get().subscribe((datos) => {
      this.comboCursos = datos.map(alumno => ({ id: alumno.idCurso, descripcion: alumno.ciclo+" "+alumno.nivel+" "+alumno.turno})); 
    })
  }

  ngOnInit() {



    this.formulario = new FormGroup({
      estado_Inscripcion: new FormControl(this.arg?.estado_Inscripcion, [Validators.required]),
      fecha_Inscripcion: new FormControl(formatDate(this.arg?.fecha_Inscripcion||''), [Validators.required]),
      monto_Matricula: new FormControl(this.arg?.monto_Matricula),
      descuento: new FormControl(this.arg?.descuento, [Validators.required]),
      alumno: new FormControl(this.arg?.alumno.id_Alumno, [Validators.required]),
      curso: new FormControl(this.arg?.curso.idCurso, [Validators.required])
    });
  }


  guardar(): void {
    if (this.formulario?.valid) {
      if (this.arg?.idinscripcion != 0) {

        let inscrip = { "idinscripcion": this.arg?.idinscripcion,...this.formulario.value };
        inscrip['alumno']= {"id_Alumno": inscrip['alumno']};
        inscrip['curso']= {"idCurso": inscrip['curso']};

        this.servicio.put(inscrip).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            if (error.statusCode === 400) {
              this.errorMessage = error.message;
            }
          }
        );
      } else {
        let inscrip = { ...this.formulario.value };
        inscrip['alumno']= {"id_Alumno": inscrip['alumno']};
        inscrip['curso']= {"idCurso": inscrip['curso']};
        console.log(inscrip);
        this.servicio.post(inscrip).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            if (error.statusCode >= 400) {
              this.errorMessage = error.message;
            }
          }
        );
      }

    } else {
      console.log('Formulario no válido');
    }
  }

  seleccionaCurso(arg:any){
    const curso = this.servicioCurso.getId(arg);
    this.formulario.controls['monto_Matricula'].setValue("500000")
  }

  get estado_Inscripcion() { return this.formulario?.get('estado_Inscripcion'); }
  get fecha_Inscripcion() { return this.formulario?.get('fecha_Inscripcion'); }
  get monto_Matricula() { return this.formulario?.get('monto_Matricula'); }
  get descuento() { return this.formulario?.get('descuento'); }
  get alumno() { return this.formulario?.get('alumno'); }
  get curso() { return this.formulario?.get('curso'); }
  
}
