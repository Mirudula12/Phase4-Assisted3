import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 counter:number=0

 incr() {
  this.counter+=1;
 }

 decr() {
  this.counter-=1;
 }
 
 
}
