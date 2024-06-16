import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../../../models/Alumno';
import { Contacto } from '../../../models/Contacto';
import { NgbAccordionModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClienteAlumnoService } from '../../../services/cliente-alumno.service';
import { ItemComboBox } from '../../combo-box/Item';
import { ComboBoxComponent } from '../../combo-box/combo-box.component';
import { formatDate } from '../../../services/fecha';
import { ContactoComponent } from '../contacto/contacto.component';
import { ContactoAlumnoService } from '../../../services/contacto-alumno.service';

@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComboBoxComponent,
    NgbAccordionModule,
    ContactoComponent,
  ],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css',
})
export class AlumnoComponent implements OnInit {
  @Input() title: string = '';
  @Input() arg?: Alumno;
  errorMessage: string | null = null;
  formulario: FormGroup;

  public contactos: Contacto[] = [];
  public comboestado: ItemComboBox[] = [
    { id: 'Activo', descripcion: 'Activo' },
    { id: 'Desactivado', descripcion: 'Desactivado' },
  ];

  constructor(
    public activeModal: NgbActiveModal,
    public servicio: ClienteAlumnoService,
    public servicioContacto: ContactoAlumnoService
  ) {
    this.formulario = new FormGroup({});
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      nomb_A: new FormControl(this.arg?.nomb_A, [Validators.required]),
      apellido_A: new FormControl(this.arg?.apellido_A, [Validators.required]),
      fech_Nac: new FormControl(formatDate(this.arg?.fech_Nac || ''), [
        Validators.required,
      ]),
      direc_A: new FormControl(this.arg?.direc_A, [Validators.required]),
      estado_A: new FormControl(this.arg?.estado_A),
      cedula: new FormControl(this.arg?.cedula),
    });

    if (this.arg?.id_Alumno || 0 > 0)
      this.servicioContacto.getIdAlumno(this.arg?.id_Alumno || 0).subscribe(
        (dat) => {
          this.contactos = dat;
        },
        (error) => {
          this.contactos = [];
        }
      );
  }

  agregarContacto() {
    let formularioContacto: FormGroup;
    formularioContacto = new FormGroup({
      id_alumno: new FormControl(this.arg?.id_Alumno, [Validators.required]),
      nomb_A: new FormControl(this.arg?.nomb_A, [Validators.required]),
      apellido_A: new FormControl(this.arg?.apellido_A, [Validators.required]),
      fech_Nac: new FormControl(formatDate(this.arg?.fech_Nac || ''), [
        Validators.required,
      ]),
      direc_A: new FormControl(this.arg?.direc_A, [Validators.required]),
      estado_A: new FormControl(this.arg?.estado_A),
      cedula: new FormControl(this.arg?.cedula),
    });
    this.contactos.push({
      id_contacto: 0,
      nomb_Contacto: '',
      apellido_Contacto: '',
      tipoRelacion: 'Otro',
      telef_contacto: '',
      direccion: '-',
      emergencia: false,
      index: 0,
    });
  }

  actualizarItem(Contacto: Contacto) {
    this.contactos[Contacto.index] = Contacto;
  }

  quitarContacto(con: Contacto) {
    this.contactos.pop();
  }

  guardar(): void {
    if (this.formulario?.valid) {
      if (this.arg?.id_Alumno || 0 != 0) {
        this.servicio.putAlumno({ ...this.formulario.value, id_Alumno: this.arg?.id_Alumno }).subscribe(
          (data) => {
            var contatoP = this.contactos.map((arg) =>{
              return {...arg, alumno:{ id_Alumno : data.id_Alumno || 0} }
            })           

              this.servicioContacto.post(contatoP).subscribe(
                (dataC) => {
                  this.activeModal.close(data);
                },
                (errorC) => {
                  if (errorC.statusCode >= 400) {
                    console.log(contatoP);
                    this.errorMessage = 'Contacto:'+errorC.message;
                  }
                }
              );
          },
          (error) => {
            if (error.statusCode >= 400) {
              this.errorMessage ='Alumno:'+error.message;
            }
          }
        );
      } else {
        this.servicio.postAlumno({ ...this.formulario.value }).subscribe(
          (data) => {
            var contatoP = this.contactos.map((arg) => {
              return { ...arg, alumno: { id_Alumno: data.id_Alumno || 0 } };
            });

            this.servicioContacto.post(contatoP).subscribe(
              (dataC) => {
                this.activeModal.close(data);
              },
              (errorC) => {
                if (errorC.statusCode >= 400) {
                  console.log(contatoP);
                  this.errorMessage = 'Contacto:' + errorC.message;
                }
              }
            );
          },
          (error) => {
            if (error.statusCode >= 400) {
              this.errorMessage = 'Alumno:' + error.message;
            }
          }
        );
      }
    } else {
      console.log('Formulario no válido');
    }
  }

  get id_Alumno() {
    return this.formulario?.get('id_Alumno');
  }
  get nomb_A() {
    return this.formulario?.get('nomb_A');
  }
  get apellido_A() {
    return this.formulario?.get('apellido_A');
  }
  get fech_Nac() {
    return this.formulario?.get('fech_Nac');
  }
  get direc_A() {
    return this.formulario?.get('direc_A');
  }
  get cedula() {
    return this.formulario?.get('cedula');
  }
  get estado_A() {
    return this.formulario?.get('estado_A');
  }
}
