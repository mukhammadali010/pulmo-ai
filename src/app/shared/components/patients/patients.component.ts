import { Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { ToolbarOverviewExample } from "../navbar/navbar.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-patients",
  standalone: true,
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, ToolbarOverviewExample ],
})
export default class Patients {
  patientForm = new FormGroup({
    name: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    date: new FormControl('' , [Validators.required ]),
    tel: new FormControl('' , [Validators.required , Validators.maxLength(9)]),
  })


  constructor(private router:Router){};
  onSubmit(){
    if(this.patientForm.valid){
      
      console.log(this.patientForm.value , 'test');
      this.router.navigate(['/home']);
    }else{
      alert('forma notogri toldirilgan')
    }
    
  }
}

