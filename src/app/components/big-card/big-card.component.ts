import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string= ""
  @Input()
  cardAuthor:string = "Anonymous"
  @Input()
  commentIcon:string = "../../../assets/comment.svg"
  @Input()
  markIcon:string = "../../../assets/markbook.svg"
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
