import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allownewServer=false;
  constructor(){
    setTimeout(() => {
      this.allownewServer=true;
    }, 2000);
  }

  ngOnInit() {
      
  }

}

