import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: [
  './menu-title.component.css',
  './menu-title.responsive.component.css'
  ]
})
export class MenuTitleComponent implements OnInit {

  @Input()
  cardTitle:string= ""
  @Input()
  cardAuthor:string= "Anonymous"
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
