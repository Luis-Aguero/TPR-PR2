import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ItemComboBox } from './Item';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-combo-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> ComboBoxComponent),
      multi: true
    }
  ]
})
export class ComboBoxComponent implements ControlValueAccessor {
  @Input() options: ItemComboBox[] = [];
  @Output() selectionChange = new EventEmitter<any>();
  
  value: string = "";
  onChange: any = () => {};
  onTouched: any = () => {};


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    
  }

  onValueChange(event: any):void{
    this.value = event;
    this.onChange(this.value);
    this.onTouched();
    this,this.selectionChange.emit(this.value)
  }

}
