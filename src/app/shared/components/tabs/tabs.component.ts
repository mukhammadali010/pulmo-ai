import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Parametrlar } from '../parametrlar/parametrlar.component';
import { AudioUpload } from '../audio-upload/audio-upload.component';
import { ImageUpload } from "../image-upload/image-upload.component";


@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  imports: [MatTabsModule, Parametrlar, AudioUpload, ImageUpload],
})
export class TabGroupAlignExample implements OnInit {
  selectedTabIndex: number = 0; // Default tab indeksi

  ngOnInit() {
    const savedIndex = sessionStorage.getItem('selectedTab');
    if (savedIndex !== null) {
      this.selectedTabIndex = +savedIndex; // sessionStorage-dan indeksni olish
    }
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
    sessionStorage.setItem('selectedTab', index.toString()); // Tanlangan indeksni saqlash
  }
}
