import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;
  value;

  data = [
    {id: 0, name: 'Health'},
    {id: 1, name: 'Life'},
    {id: 2, name: 'CV'},
    {id: 3, name: 'Motor'}
  ]

  funct1(){
    if (this.title == 'James'){
      console.log("Say Mr. James Bond");
    }
  }

  funct2(){
    if (this.value == 'Life'){
      console.log("RSSB");
    }
  }

}
