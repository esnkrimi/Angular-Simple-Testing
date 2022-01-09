import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.sass']
})
export class TestingComponent implements OnInit {
  counter: number = 1;
  constructor() {
    this.counter = 1;
  }
  ngOnInit(): void {
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
