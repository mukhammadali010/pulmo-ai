import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { InputTypes } from '../../../shared/models/frontend/input-types';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import InputComponent from "../../../shared/components/input/input.component";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [MatButton, FormsModule, MatIconModule, InputComponent , ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent  implements OnInit{
  formBuilder = inject(FormBuilder);
  inputTypes = InputTypes;
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailOrUserName:['' , [Validators.required , Validators.minLength(3) , Validators.email]],
      password:['' , [Validators.required , Validators.minLength(6),this.textTrimValidators,  this.upperCaseLowerCaseValidators]],
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

  upperCaseLowerCaseValidators(control:AbstractControl): ValidationErrors | null{
    const value = control.value ;   
    if(!/[A-Z]/.test(value) || !/[a-z]/.test(value)){
      return  {uppercaseLowercase:true};
    }else{
      return null
    }
  }
}
