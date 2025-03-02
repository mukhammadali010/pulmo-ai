import { Component } from "@angular/core"
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { DatePipe, NgFor } from "@angular/common"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatRadioModule } from "@angular/material/radio"
import  { Router } from "@angular/router"
import { ToolbarOverviewExample } from "../navbar/navbar.component"
import { MatNativeDateModule } from "@angular/material/core"

@Component({
  selector: "app-patients",
  standalone: true,
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  providers: [DatePipe],
  imports: [
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatRadioModule,
    NgFor,
    ToolbarOverviewExample,
  ],
})
export default class Patients {
  patientForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    date: new FormControl("", [Validators.required]),
    tel: new FormControl("+998 ", [Validators.required]),
    jins: new FormControl("", [Validators.required]),
  })

  jins = [
    { value: "male", name: "Эркак" },
    { value: "female", name: "Аёл" },
  ]

  constructor(
    private router: Router,
    private datePipe: DatePipe,
  ) {}

  formatPhoneNumber(event: any) {
    // Get the input value
    let input = event.target.value

    // Always ensure it starts with +998
    if (!input.startsWith("+998")) {
      input = "+998" + input.replace(/^\+998/, "")
    }

    // Remove all non-digit characters except the leading +
    const cleaned = "+" + input.substring(1).replace(/\D/g, "")

    // Format the number: +998 XX XXX XX XX
    let formatted = ""

    if (cleaned.length > 0) {
      formatted = cleaned.substring(0, 4) // +998
    }

    if (cleaned.length > 4) {
      formatted += " " + cleaned.substring(4, 6) // XX
    }

    if (cleaned.length > 6) {
      formatted += " " + cleaned.substring(6, 9) // XXX
    }

    if (cleaned.length > 9) {
      formatted += " " + cleaned.substring(9, 11) // XX
    }

    if (cleaned.length > 11) {
      formatted += " " + cleaned.substring(11, 13) // XX
    }

    // Limit to the correct length
    if (formatted.length > 17) {
      formatted = formatted.substring(0, 17)
    }

    // Update the form control
    this.patientForm.get("tel")?.setValue(formatted)
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = { ...this.patientForm.value }
      formData.date = formData.date ? this.datePipe.transform(formData.date, "yyyy-MM-dd") : null

      // Check if phone number is complete (should be 17 characters: +998 XX XXX XX XX)
      const phoneValue = formData.tel as string
      if (!phoneValue || phoneValue.length < 17) {
        alert("Telefon raqam to'liq kiritilmagan!")
        return
      }

      console.log(formData, "test")
      this.router.navigate(["/home"])
    } else {
      alert("Forma noto'g'ri to'ldirilgan!")
    }
  }
}

