import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }
  serverName;
  serverPid = 11;
  serverStatus='Offline';

  toggleButton(){
    if(this.serverStatus=='Offline'){
      this.serverStatus = 'Online'   
    }
    else if(this.serverStatus=='Online'){
      this.serverStatus='Offline'
    }
  }
  ngOnInit() {
  }

}
