import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../../../models/Alumno';
import { Contacto } from '../../../models/Contacto';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteAlumnoService } from '../../../services/cliente-alumno.service';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent implements OnInit {
  @Input() title: string = '';
  @Input() arg?: Alumno;

  formulario: FormGroup;

  public contactos: Contacto[] = [];

  constructor(public activeModal: NgbActiveModal,
    public servicio: ClienteAlumnoService
  ) {
    this.formulario = new FormGroup({});
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      id_Alumno: new FormControl(this.arg?.id_Alumno, [Validators.required]),
      nomb_A: new FormControl(this.arg?.nomb_A, [Validators.required]),
      apellido_A: new FormControl(this.arg?.apellido_A, [Validators.required]),
      fech_Nac: new FormControl(this.arg?.fech_Nac, [Validators.required]),
      direc_A: new FormControl(this.arg?.direc_A, [Validators.required]),
      estado_A: new FormControl(this.arg?.estado_A),
      nivel_A: new FormControl(this.arg?.nivel_A, [Validators.required]),
      ciclo_A: new FormControl(this.arg?.ciclo_A, [Validators.required]),
      especializacion_A: new FormControl(this.arg?.especializacion_A, [Validators.required])
    });
    this.formulario.controls['id_Alumno'].disable();
  }

  agregarContacto() {
    this.contactos.push({ id_alumno: 0, encargado: 0, id_contacto: 0, info_contacto: "", nombre_contacto: "", tipo_info: 0 });
  }

  quitarContacto(con: Contacto) {
    this.contactos.pop()
  }

  guardar(): void {
    if (this.formulario?.valid) {
      this.formulario.controls['id_Alumno'].enable();
      if ("id_Alumno" in this.formulario.value) {
        this.servicio.putAlumno({ ... this.formulario.value }).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.servicio.postAlumno({ ... this.formulario.value }).subscribe(
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

  get id_Alumno() { return this.formulario?.get('id_Alumno'); }
  get nomb_A() { return this.formulario?.get('nomb_A') }
  get apellido_A() { return this.formulario?.get('apellido_A') }
  get fech_Nac() { return this.formulario?.get('fech_Nac') }
  get direc_A() { return this.formulario?.get('direc_A') }
  get nivel_A() { return this.formulario?.get('nivel_A') }
  get ciclo_A() { return this.formulario?.get('ciclo_A') }
  get especializacion_A() { return this.formulario?.get('especializacion_A') }

}
