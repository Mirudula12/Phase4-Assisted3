import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  value:string="Hi users"
  

  mobileseries= [
    {
      "id":1,
      "name":"vivo"
    },

    {
      "id":2,
      "name":"nokia"
    }
  ]
  


  salary:number=70000

  date=new Date();

  wish="GOOD MORNING"


  person={
    "name": "Anu",
    "gender": "f"
  }

}
