import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputTypes } from '../../../shared/models/frontend/input-types';
import { InputComponent } from '../../../shared/components/input/input.component';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ MatButton , MatIconModule ,NgIf , FormsModule],
  templateUrl: './signup.component.html',

})
export default class SignUpComponent {
  inputTypes = InputTypes;
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;

  onChange = (value: any) => {};
  onTouched = () => {};
  onFocus(): void {
    this.inputContainer.nativeElement.classList.add('focused');
  }
  
  onBlur(): void {
    this.inputContainer.nativeElement.classList.remove('focused');
    this.onTouched();
  }
  

}
