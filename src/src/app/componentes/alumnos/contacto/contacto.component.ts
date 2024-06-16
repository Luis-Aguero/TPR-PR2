import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contacto } from '../../../models/Contacto';
import { ItemComboBox } from '../../combo-box/Item';
import { ComboBoxComponent } from '../../combo-box/combo-box.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ComboBoxComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  @Input() itemData?: Contacto;
  @Input() index?: number;
  @Output() itemUpdated = new EventEmitter<Contacto>();
  itemForm: FormGroup;
  public comboeTipoRelacion: ItemComboBox[] = [{ id: "Familiar", descripcion: "Familiar" }, { id: "Otro", descripcion: "Otro" }];

  constructor(private fb: FormBuilder) { 
    this.itemForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.itemForm = this.fb.group({  
      nomb_Contacto: [this.itemData?.nomb_Contacto, Validators.required],
      apellido_Contacto: [this.itemData?.apellido_Contacto, Validators.required],
      tipoRelacion: [this.itemData?.tipoRelacion, Validators.required],
      telef_contacto: [this.itemData?.telef_contacto, Validators.required],
      direccion: [this.itemData?.direccion, Validators.required], 
      emergencia : [this.itemData?.emergencia, Validators.required],
    });
  }

  onSubmit() {
    if (this.itemForm.valid) {
      this.itemUpdated.emit({ index: this.index, id_contacto: this.itemData?.id_contacto||0, ...this.itemForm.value });
    }
  }  
  
  get nomb_Contacto() { return this.itemForm?.get('nomb_Contacto'); }
  get apellido_Contacto() { return this.itemForm?.get('apellido_Contacto'); }
  get tipoRelacion() { return this.itemForm?.get('tipoRelacion'); }
  get telef_contacto() { return this.itemForm?.get('telef_contacto'); }
  get direccion() { return this.itemForm?.get('direccion'); } 
  get emergencia() { return this.itemForm?.get('emergencia'); } 

}

