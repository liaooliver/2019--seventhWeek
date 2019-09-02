import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public content = false;

  constructor() { }

  ngOnInit() {
  }

  togglePage(event){
    this.content = event
  }

}
