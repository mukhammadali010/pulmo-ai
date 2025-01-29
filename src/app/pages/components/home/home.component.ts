import { Component } from '@angular/core';
import { ToolbarOverviewExample } from "../../../shared/components/navbar/navbar.component";
import { TabGroupAlignExample } from "../../../shared/components/tabs/tabs.component";
@Component({
  selector: 'app-home',
  imports: [ToolbarOverviewExample, TabGroupAlignExample],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
