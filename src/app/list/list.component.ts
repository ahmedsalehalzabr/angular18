import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
http =inject(HttpClient);
data: any;

ngOnInit(){
this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe( x => {
  this.data =x;
  console.log(this.data);
});
}
}
