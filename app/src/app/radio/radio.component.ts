import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() { }

  label;

  funct3(event){
    this.label = event.target.value
    if(event.target.value=='Life'){
    console.log(event.target.value)
    console.log('Rssb')
    }
  }

  ngOnInit() {
  }

}
