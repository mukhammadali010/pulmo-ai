import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Parametrlar } from "../parametrlar/parametrlar.component";
import { ImageUpload } from "../image-upload/image-upload.component";

/**
 * @title Tab group with aligned labels
 */
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl:'./tabs.component.scss',
  imports: [MatTabsModule, Parametrlar, ImageUpload],
})
export class TabGroupAlignExample {}
