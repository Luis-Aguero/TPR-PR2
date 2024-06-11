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
  formulario: FormGroup;
  comboAlumnos: ItemComboBox[] = [];
  comboCursos: ItemComboBox[] = [];
  comboEstado: ItemComboBox[] = [{id:"1", descripcion:"Inscripto"}, {id:"2", descripcion:"Cancelado"}];

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
      idInscripcion: new FormControl(this.arg?.idInscripcion, [Validators.required]),
      ano_Letivo: new FormControl(this.arg?.ano_Letivo, [Validators.required]),
      estado_Inscripcion: new FormControl(this.arg?.estado_Inscripcion, [Validators.required]),
      fech_Inscripcion: new FormControl(this.arg?.fech_Inscripcion, [Validators.required]),
      monto_Matricula: new FormControl(this.arg?.monto_Matricula),
      descuento: new FormControl(this.arg?.descuento, [Validators.required]),
      id_Alumno: new FormControl(this.arg?.id_Alumno, [Validators.required]),
      idCurso: new FormControl(this.arg?.id_Alumno, [Validators.required])
    });
    this.formulario.controls['idInscripcion'].disable();
  }


  guardar(): void {
    if (this.formulario?.valid) {
      this.formulario.controls['idInscripcion'].enable();
      if ("idCuidInscripcionrso" in this.formulario.value) {
        this.servicio.put({ ... this.formulario.value }).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.servicio.post({ ... this.formulario.value }).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            console.error(error);
          }
        );
      }

    } else {
      console.log('Formulario no válido');
    }
  }

  seleccionaCurso(arg:any){
    console.log(arg);
  }

  get idInscripcion() { return this.formulario?.get('idInscripcion'); }
  get ano_Letivo() { return this.formulario?.get('ano_Letivo'); }
  get estado_Inscripcion() { return this.formulario?.get('estado_Inscripcion'); }
  get fech_Inscripcion() { return this.formulario?.get('fech_Inscripcion'); }
  get monto_Matricula() { return this.formulario?.get('monto_Matricula'); }
  get descuento() { return this.formulario?.get('descuento'); }
  get id_Alumno() { return this.formulario?.get('id_Alumno'); }
  get idCurso() { return this.formulario?.get('idCurso'); }
  
}
