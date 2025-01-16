import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Parametrlar } from "../parametrlar/parametrlar.component";

/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl:'./tabs.component.scss',
  imports: [MatTabsModule, Parametrlar],
})
export class TabGroupAlignExample {}
