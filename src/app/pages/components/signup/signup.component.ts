import { Component, ElementRef, ViewChild } from '@angular/core';


import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { InputTypes } from '../../../shared/models/frontend/input-types';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  imports: [ MatButton , MatIconModule ,NgIf , FormsModule , HttpClientModule],
  templateUrl: './signup.component.html',

})
export default class SignUpComponent {
  inputTypes = InputTypes;
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;
  errorMessage: string | null = null
  loading = false


  constructor(private router:Router , private authService:AuthService ){};

  onChange = (value: any) => {};
  onTouched = () => {};
  onFocus(): void {
    this.inputContainer.nativeElement.classList.add('focused');
  }
  
  onBlur(): void {
    this.inputContainer.nativeElement.classList.remove('focused');
    this.onTouched();
  }

  passwordMatchValidator(form: NgForm) {
    return form.controls["password"]?.value === form.controls["password2"]?.value ? null : { mismatch: true }
  }

  onSubmit(form: NgForm) {
    console.log(form);
    
    if (form.invalid) {
      return
    }

    this.loading = true
    this.errorMessage = null

    if (form.valid || this.passwordMatchValidator(form)) {
      console.log('Form Submitted:', form.value);
    } else {
      console.error('Form is invalid');
    }

    this.authService.register(form.value).subscribe({
      next: () => {
        this.router.navigate(["/login"])
      },
      error: (error) => {
        this.loading = false
        this.errorMessage = error.error?.detail || "Registration failed. Please try again."
      },
    })
  }

}
