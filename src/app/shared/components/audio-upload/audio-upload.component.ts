import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-audio-upload',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './audio-upload.component.html',
  styleUrls: ['./audio-upload.component.scss'],
})
export class AudioUpload implements OnInit {
  audioUrl: string | null = null; // Faqat bitta audio fayl saqlanadi
  path:string= ''
  ngOnInit(): void {
    const savedAudio = sessionStorage.getItem('uploadedAudio');
    if (savedAudio) {
      this.audioUrl = savedAudio;
    }
  }

  onUpload(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.audioUrl = reader.result as string;
        sessionStorage.setItem('uploadedAudio', this.audioUrl); // Yangi fayl yuklanganda eskisini almashtirish
      };
    }
  }

  clearAudio() {
    this.audioUrl = null;
    sessionStorage.removeItem('uploadedAudio'); // Saqlangan faylni o‘chirish
  }
}
