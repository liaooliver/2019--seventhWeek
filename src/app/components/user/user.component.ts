import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Output() nextPage = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  next(){
    this.nextPage.emit(false)
  }

}
