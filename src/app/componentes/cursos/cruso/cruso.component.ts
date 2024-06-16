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
  imports: [FormsModule, ReactiveFormsModule, CommonModule,ComboBoxComponent],
  templateUrl: './cruso.component.html',
  styleUrl: './cruso.component.css'
})
export class CrusoComponent implements OnInit{
  @Input() title: string = '';
  @Input() arg?: Curso;
  formulario: FormGroup;
  comboTurnos: ItemComboBox[] = [{id:"1", descripcion:"Mañana"},{id:"2", descripcion:"Tarde"},{id:"3", descripcion:"Noche"}];
  comboEstado: ItemComboBox[] = [{id:"Activo", descripcion:"Activo"},{id:"Desactivado", descripcion:"Desactivado"}];

  constructor(public activeModal: NgbActiveModal,
    public servicio: CursoService
  ) {
    this.formulario = new FormGroup({});
  }  
  ngOnInit() {
    this.formulario = new FormGroup({
      idCurso: new FormControl(this.arg?.idCurso, [Validators.required]),
      nivel: new FormControl(this.arg?.nivel, [Validators.required]),
      ciclo: new FormControl(this.arg?.ciclo, [Validators.required]),
      especializacion: new FormControl(this.arg?.especializacion, [Validators.required]),
      estado_C: new FormControl(this.arg?.estado_C),
      periodo: new FormControl(this.arg?.periodo, [Validators.required]),
      arancel: new FormControl(this.arg?.arancel, [Validators.required]), 
      turno: new FormControl(this.arg?.turno, [Validators.required])
    });
    this.formulario.controls['idCurso'].disable();
  }
  guardar(): void {
    if (this.formulario?.valid) {  
      if (this.arg?.idCurso != 0) {
        this.servicio.put({ idCurso:this.arg?.idCurso , ... this.formulario.value }).subscribe(
          (data) => {
            this.activeModal.close(data)
          },
          (error) => {
            console.error(error);
          }
        );
      } else { 
        this.servicio.post({ ...this.formulario.value }).subscribe(
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
  
  get idCurso(){return this.formulario?.get('idCurso'); }            
  get nivel(){return this.formulario?.get('nivel'); }            
  get ciclo(){return this.formulario?.get('ciclo'); }            
  get especializacion(){return this.formulario?.get('especializacion'); }
  get estado_C(){return this.formulario?.get('estado_C'); }
  get periodo(){return this.formulario?.get('periodo'); }
  get arancel(){return this.formulario?.get('arancel'); }
  get matricula(){return this.formulario?.get('matricula'); }
  get turno(){return this.formulario?.get('turno'); }
}
