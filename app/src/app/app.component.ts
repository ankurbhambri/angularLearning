import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;
  value;
  flag=true;
  name = ''
  count=0;

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

  toggleFlag(){

    this.flag  = !this.flag;
    return this.flag;
  }

  array = ['Ankur', 'VIkas'];
  add()
  {
    debugger;
    this.array.push(this.name);
  }

  funct5(){
    this.count++;
  }

  changeColor(){
    if(this.count===5){
      return 'green'
    }
  }
}
