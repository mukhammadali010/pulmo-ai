import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToolbarOverviewExample } from "../../../shared/components/navbar/navbar.component";
import { MatIconModule } from '@angular/material/icon';
import InputComponent from '../../../shared/components/input/input.component';
import { InputTypes } from '../../../shared/models/frontend/input-types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatCardModule, ToolbarOverviewExample, MatIconModule, InputComponent],
  styleUrls: ['./profile.component.scss']
})
export default class ProfileComponent {

  inputTypes= InputTypes;

  user = {
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    imageUrl: '',
    image: '',
  };

  onSubmit() {
    // Formni yuborish va ma'lumotlarni saqlash
    console.log(this.user);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Faylni upload qilish yoki preview qilish kodini qo'shish mumkin
      const reader = new FileReader();
      reader.onload = () => {
        this.user.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onUpload() {
    // Faylni serverga yuklash jarayonini qo'shish mumkin
    console.log('Profile picture uploaded!');
  }
}
