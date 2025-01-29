import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [MatButtonModule , MatIconModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export default class NotFoundComponent {

  constructor(private router:Router){}

  navigateToHome():void{
    this.router.navigate(['/home']);
  }

}
