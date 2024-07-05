import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule , MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  y = 0;

  addOne() {
   this.y++;
  }

  status = false;
  show(s : boolean) {
    if(s == true) {
      this.status = false;
    } else {
      this.status = true;
    }
   
  }
}
