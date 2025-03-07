import { Component, inject } from '@angular/core';
import { ToolbarOverviewExample } from "../navbar/navbar.component";
import { PatientResultsStore } from '../../../store/results.store';

@Component({
  selector: 'app-patient-results',
  imports: [ToolbarOverviewExample],
  templateUrl: './patient-results.component.html',
  styleUrl: './patient-results.component.scss'
})
export default class PatientResultsComponent {
  store = inject(PatientResultsStore);
   
}
