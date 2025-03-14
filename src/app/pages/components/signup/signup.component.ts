import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { InputTypes } from '../../../shared/models/frontend/input-types';
import InputComponent from "../../../shared/components/input/input.component";

@Component({
  selector: 'app-signup',
  imports: [MatButton, MatIconModule, FormsModule, ReactiveFormsModule, InputComponent],
  templateUrl: './signup.component.html',

})
export default class SignUpComponent implements OnInit {
  inputTypes = InputTypes;
  formBuilder = inject(FormBuilder);
  inputContainer = viewChild<ElementRef<HTMLDivElement>>('')
  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Zʻ‘’`\s\-]*$/), this.textTrimValidators]],
      surName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-Zʻ‘’`\s\-]*$/), this.textTrimValidators]],
      email: ['', [Validators.required, Validators.minLength(2), Validators.email, Validators.pattern(/^[a-zA-Zʻ‘’`\s\-]*$/), this.textTrimValidators]],
      password: ['', [Validators.required, Validators.minLength(6), this.textTrimValidators, this.uppercaseLowercaseValidators]],
      password2: ['', [Validators.required, Validators.minLength(6), this.textTrimValidators, this.uppercaseLowercaseValidators]],
    })
  }

  textTrimValidators(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value.trim().length === 0) {
      return { whitespace: true }
    } else {
      return null
    }
  }
  uppercaseLowercaseValidators(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
      return { uppercaseLowercase: true };
    }
    return null;
  }





}
