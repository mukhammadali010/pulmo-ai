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
      console.log('Form noto‘g‘ri to‘ldirilgan!');
    }
    
  }

  onTelChange(event: any) {
    let phone = event.target.value;
    phone = phone.replace(/\D/g, ''); // faqat raqamlarni qoldiradi
    if (phone.length > 3 && phone.length <= 5) {
      phone = `+998 (${phone.substring(3, 5)}) ${phone.substring(5, 8)}-${phone.substring(8, 10)}-${phone.substring(10, 12)}`;
    }
    event.target.value = phone;
  }
}

