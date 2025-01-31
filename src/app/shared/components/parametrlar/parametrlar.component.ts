import { Component, inject, Inject } from "@angular/core"
import { ParametrSavollar, savol } from "../../models/frontend/parametr-savollar"
import { MatRadioModule } from "@angular/material/radio"
import { CommonModule, NgFor, NgIf } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { type ParametrAnswers, calculateResults } from "../../models/frontend/parametr-result-types"
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog"
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: "app-parametrlar",
  standalone: true,
  templateUrl: "./parametrlar.component.html",
  styleUrls: ["./parametrlar.component.scss"],
  imports: [MatRadioModule, FormsModule, MatButtonModule, MatIconModule, MatDialogModule, CommonModule],
})
export class Parametrlar {
  savollar = savol
  answers: ParametrAnswers = {}
  dialog = inject(MatDialog)

  constructor() {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        answers: this.answers,
      },
    })
  }

  currentPage = 0

  get currentSavol() {
    return this.savollar[this.currentPage]
  }

  nextPage() {
    if (this.currentPage < this.savollar.length - 1) {
      this.currentPage++
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--
    }
  }

  isAllQuestionsAnswered(): boolean {
    return this.savollar.every((savol, index) => this.answers[index] !== undefined)
  }

  submitAnswers() {
    if (this.isAllQuestionsAnswered()) {
    
      const results = calculateResults(this.answers)
     
      this.openResultDialog(results)
    } else {
      alert("Iltimos, barcha savollarga javob bering.")
    }
  }

  openResultDialog(results: { [key: string]: number }) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        results: results,
      },
    })
  }
}

@Component({
  selector: "dialog-data-example-dialog",
  standalone: true,
  templateUrl: "./dialog-data-example-dialog.html",
  imports: [CommonModule, NgFor, MatDialogModule , CanvasJSAngularChartsModule],
})
export class DialogDataExampleDialog {
  chartOptions: any;

  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { results: { [key: string]: number } }
  ) {
    this.chartOptions = this.createChartOptions(data.results);
  }

  createChartOptions(results: { [key: string]: number }) {
    return {
      title: {
        text: "Kasalliklar foiz ko'rsatkichlari",
      },
      animationEnabled: true,
      axisY: {
        maximum: 100 // Y o'qidagi maksimal qiymat har doim 100 bo'ladi
      },
      data: [
        {
          type: "column",
          dataPoints: Object.keys(results).map((key) => ({
            label: key,
            y: results[key],
            color: this.getColor(results[key]), // Foizga mos rangni tanlash
          })),
        },
      ],
    };
  }

  getColor(percentage: number): string {
    if (percentage >= 70) return "brown"; 
    if (percentage >= 40) return "#FFC107"; 
    return "#4CAF50";
  }


  closeDialog() {
    this.dialogRef.close()
  }
}

