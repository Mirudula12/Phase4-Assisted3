import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value:string="Hello"
  applyc1:boolean=true;

  cval:string="blue";
  hasError:boolean=false;
 
 
}
