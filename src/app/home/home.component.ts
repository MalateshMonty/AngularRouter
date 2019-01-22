import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  name= 'vin';

   heroes = HEROES;

  save () {
    console.log(this.name)
  }
}
