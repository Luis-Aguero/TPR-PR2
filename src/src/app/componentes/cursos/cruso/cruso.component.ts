import { Component, Input, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from '../../../models/Curso';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemComboBox } from '../../combo-box/Item';
import { ComboBoxComponent } from '../../combo-box/combo-box.component';

@Component({
  selector: 'app-cruso',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ComboBoxComponent],
  templateUrl: './cruso.component.html',
  styleUrl: './cruso.component.css'
})
export class CrusoComponent implements OnInit {
  @Input() title: string = '';
  @Input() arg?: Curso;
  errorMessage: string | null = null;
  formulario: FormGroup;
  comboTurnos: ItemComboBox[] = [{ id: "1", descripcion: "Mañana" },
  { id: "2", descripcion: "Tarde" },
  { id: "3", descripcion: "-" }];

  comboEstado: ItemComboBox[] = [{ id: "Activo", descripcion: "Activo" },
  { id: "Desactivado", descripcion: "Desactivado" }];
  comboNivel: ItemComboBox[] = [{ id: "Nivel Inicial", descripcion: "Nivel Inicial" },
  { id: "Educación Escolar Básica", descripcion: "Educación Escolar Básica" },
  { id: "Educación", descripcion: "Educación" },
  { id: "Media", descripcion: "Media" }];
  comboCiclo: ItemComboBox[] = [{ id: "Pre-escolar", descripcion: "Pre-escolar" },
  { id: "Primer ciclo", descripcion: "Primer ciclo" },
  { id: "Segundo ciclo", descripcion: "Segundo ciclo" },
  { id: "Tercer ciclo", descripcion: "Tercer ciclo" },
  { id: "Bachillerato", descripcion: "Bachillerato" }];
  comboEspecializacion: ItemComboBox[] = [{ id: "-", descripcion: "-" },
  { id: "Ciencias Básicas", descripcion: "Ciencias Básicas" },
  { id: "Ciencias Sociales", descripcion: "Ciencias Sociales" },
  { id: "BTI", descripcion: "BTI" },
  { id: "BTA", descripcion: "BTA" }]
  comboGrado: ItemComboBox[] = [{ id: "Pre-jardin", descripcion: "Pre-jardin" },
    { id: "Jardin", descripcion: "Jardin" },
    { id: "Preescolar", descripcion: "Preescolar" },
    { id: "Primero", descripcion: "Primero" },
    { id: "Segundo", descripcion: "Segundo" },
    { id: "Tercero", descripcion: "Tercero" },
    { id: "Cuarto grado", descripcion: "Cuarto grado" },
    { id: "Quinto grado", descripcion: "Quinto grado" },
    { id: "Sexto grado", descripcion: "Sexto grado" },
    { id: "Septimo grado", descripcion: "Septimo grado" },
    { id: "Octavo grado", descripcion: "Octavo grado" },
    { id: "Noveno grado", descripcion: "Noveno grado" },
    { id: "Primer bachillerato", descripcion: "Primer bachillerato" },
    { id: "Segundo bachillerato", descripcion: "Segundo bachillerato" },
    { id: "Tercer bachillerato", descripcion: "Tercer bachillerato" }]

  constructor(public activeModal: NgbActiveModal,
    public servicio: CursoService
  ) {
    this.formulario = new FormGroup({});
  }
  ngOnInit() {
    this.formulario = new FormGroup({
      idCurso: new FormControl(this.arg?.idCurso, [Validators.required]),
      ciclo: new FormControl(this.arg?.ciclo, [Validators.required]),
      especializacion: new FormControl(this.arg?.especializacion, [Validators.required]),
      estado: new FormControl(this.arg?.estado),
      arancel: new FormControl(this.arg?.arancel, [Validators.required]),
      turno: new FormControl(this.arg?.turno, [Validators.required]),
      grado: new FormControl(this.arg?.grado, [Validators.required]),
      nivel: new FormControl(this.arg?.nivel, [Validators.required])
    });
  }


  guardar(): void {
    if (this.formulario?.valid) {
      if (this.arg?.idCurso != 0) {
        this.servicio.put({ idCurso: this.arg?.idCurso, ... this.formulario.value }).subscribe(
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
        this.servicio.post({ ...this.formulario.value }).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          error => {
            if (error.statusCode === 400) {
              this.errorMessage = error.message;
            }
          }
        );
      }

    } else {
      console.log('Formulario no válido');
    }
  }
  seleccionaEspecializacion(value: string) {
    this.formulario.controls['turno'].setValue("-");
    this.formulario.controls['arancel'].setValue("0")
  }
  seleccionaTurno(value: string) {
    console.log(value);
    this.formulario.controls['arancel'].setValue(500000);
    if (value == "1") this.formulario.controls['arancel'].setValue("500000");
    if (value == "2") this.formulario.controls['arancel'].setValue("400000");
    if (value == "3") {
      if (this.formulario.controls['especializacion'].value == "BTI" ||
        this.formulario.controls['especializacion'].value == "BTA"
      ) {
        this.formulario.controls['arancel'].setValue("800000")
      } else {
        this.formulario.controls['arancel'].setValue("600000")
      }
    }
  }

  get idCurso() { return this.formulario?.get('idCurso'); }
  get nivel() { return this.formulario?.get('nivel'); }
  get ciclo() { return this.formulario?.get('ciclo'); }
  get especializacion() { return this.formulario?.get('especializacion'); }
  get estado() { return this.formulario?.get('estado'); }
  get grado() { return this.formulario?.get('grado'); }
  get arancel() { return this.formulario?.get('arancel'); }
  get matricula() { return this.formulario?.get('matricula'); }
  get turno() { return this.formulario?.get('turno'); }
}
