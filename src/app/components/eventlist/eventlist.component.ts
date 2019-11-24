import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  constructor() { }
  datalist=[];
  //nameSearch="";
  ngOnInit() {
    this.datalist= [
      {
        name: "view",
        inventory: 5,
        unit_price: 45.99
      },
      {
        name: "view",
        inventory: 10,
        unit_price: 123.75
      },
      {
        name: "view",
        inventory: 2,
        unit_price: 399.50
      }
    ];
  }

}
