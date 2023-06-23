import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{counter}}
  </h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetBy()">Reset</button>
  <button (click)="decreaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number):void {
    //quiero que tome el valor del counter y sumarle uno
    this.counter += value;
  }
  decreaseBy(value: number):void {
    //quiero que tome el valor del counter y restarle uno
    this.counter -= value;
  }
  resetBy():void{
    this.counter = 10;
  }
  constructor() { }
}
