import { Component, ElementRef, ViewChild } from '@angular/core';


import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { InputTypes } from '../../../shared/models/frontend/input-types';

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
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.error('Form is invalid');
    }
  }

}
