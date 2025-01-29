import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltip } from '@angular/material/tooltip';

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule , MatTooltip ],
})
export class ToolbarOverviewExample {
}
