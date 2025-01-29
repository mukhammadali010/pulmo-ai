import {Component, Inject, inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
import { ParametrAnswers } from '../../models/frontend/parametr-result-types';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-data-example',
  templateUrl: './dialog-data-example.html',
  imports: [MatButtonModule , CommonModule],
})
export class DialogDataExample {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.html',
  imports: [MatDialogTitle, MatDialogContent , CommonModule ],
})
export class DialogDataExampleDialog {
  //  data = inject(MAT_DIALOG_DATA);
  constructor(@Inject(MAT_DIALOG_DATA) public data: { javoblar: { savol: string; javob: string; togri: boolean }[]; natija: string }) {}

  parametrAnswers:ParametrAnswers = {}

}
