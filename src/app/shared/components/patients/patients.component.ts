import { Component } from "@angular/core"
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { DatePipe, NgFor } from "@angular/common"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatRadioModule } from "@angular/material/radio"
import { MatNativeDateModule } from "@angular/material/core"
import { MatSnackBar } from "@angular/material/snack-bar"
import { Router } from "@angular/router"
import { ToolbarOverviewExample } from "../navbar/navbar.component"

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
    private snackBar: MatSnackBar // ✅ MatSnackBar qo‘shildi
  ) {}

  formatPhoneNumber(event: any) {
    let input = event.target.value

    // Doimo +998 bilan boshlanishini ta’minlash
    if (!input.startsWith("+998")) {
      input = "+998" + input.replace(/^\+998/, "")
    }

    // Faqat raqamlarni qoldirish
    const cleaned = "+" + input.substring(1).replace(/\D/g, "")

    // Telefon raqamni formatlash: +998 XX XXX XX XX
    let formatted = cleaned.substring(0, 4) // +998

    if (cleaned.length > 4) formatted += " " + cleaned.substring(4, 6) // XX
    if (cleaned.length > 6) formatted += " " + cleaned.substring(6, 9) // XXX
    if (cleaned.length > 9) formatted += " " + cleaned.substring(9, 11) // XX
    if (cleaned.length > 11) formatted += " " + cleaned.substring(11, 13) // XX

    // Maksimal uzunlikni cheklash
    formatted = formatted.substring(0, 17)

    this.patientForm.get("tel")?.setValue(formatted)
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // 3 soniya
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const formData = { ...this.patientForm.value }
      formData.date = formData.date ? this.datePipe.transform(formData.date, "yyyy-MM-dd") : null

      // Telefon raqam to‘liq kiritilganini tekshirish
      const phoneValue = formData.tel as string
      if (!phoneValue || phoneValue.length < 17) {
        this.openSnackBar("Телефон рақам тўлиқ киритилмаган!", "Close") 
        return
      }
      this.router.navigate(["/home"])
    } else {
      this.openSnackBar("Илтимос, барча майдонларни тўлдиринг!", "Close")
    }
  }
}
