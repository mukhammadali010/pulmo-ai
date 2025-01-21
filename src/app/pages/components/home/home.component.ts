import { Component } from '@angular/core';
import { ToolbarOverviewExample } from "../../../shared/components/navbar/navbar.component";
import { TabGroupAlignExample } from "../../../shared/components/tabs/tabs.component";
import { DialogDataExample } from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-home',
  imports: [ToolbarOverviewExample, TabGroupAlignExample, DialogDataExample],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
