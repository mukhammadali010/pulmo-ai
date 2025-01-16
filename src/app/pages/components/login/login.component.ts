import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { InputTypes } from '../../../shared/models/frontend/input-types';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ MatButton , FormsModule ,  MatIconModule , NgIf],
  templateUrl: './login.component.html',
  styles:[
    `
       .focused {
            @apply outline outline-blue-500 outline-1;
        }
    
    `]

})
export default class LoginComponent {
  inputTypes = InputTypes;

  user={
    email:'',
    password:''
  }
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputContainer2') inputContainer2!: ElementRef<HTMLDivElement>;
  isPasswordHidden = signal(false);

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
    } else {
      console.error('Form is invalid');
    }
  }

  onChange = (value: any) => {};
    onTouched = () => {};

  onPasswordToggle(): void {
    this.isPasswordHidden.update((value) => !value);
}
onFocus(): void {
  this.inputContainer.nativeElement.classList.add('focused');
}

onBlur(): void {
  this.inputContainer.nativeElement.classList.remove('focused');
  this.onTouched();
}

onFocus2(): void {
  this.inputContainer2.nativeElement.classList.add('focused');
}

onBlur2(): void {
  this.inputContainer2.nativeElement.classList.remove('focused');
  this.onTouched();
}
  onSubmit2() {
    if (this.user.email && this.user.password) {
      console.log(this.user);
      // Login qilish lozim bo'lgan logika
    } else {
      console.log('Formani to\'liq to\'ldiring');
    }
  }
}
