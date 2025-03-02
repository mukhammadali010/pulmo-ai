import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import InputComponent from "../input/input.component";


@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUpload implements OnInit {
  imageUrl: string | null = null; // Tasvir URL
  path: string = '';

  ngOnInit(): void {
    const savedImage = sessionStorage.getItem('uploadedImage');
    if (savedImage) {
      this.imageUrl = savedImage;
    }
  }

  onUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result as string;
        sessionStorage.setItem('uploadedImage', this.imageUrl); // Saqlash
      };
    }
  }

  clearImage() {
    this.imageUrl = null;
    sessionStorage.removeItem('uploadedImage'); // O'chirish
  }

  imageForm = new FormGroup({
    id: new FormControl('' ,Validators.required),
    comment: new FormControl(''),
    image: new FormControl('' ,Validators.required),
  })
}
