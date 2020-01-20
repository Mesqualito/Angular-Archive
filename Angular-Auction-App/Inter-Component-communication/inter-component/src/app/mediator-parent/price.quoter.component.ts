import {Component, EventEmitter, Output} from '@angular/core';
import {Stock} from './istock';
import {interval} from 'rxjs';

@Component({
  selector: 'price-quoter',
  template: `<strong>
               <button (click)="buyStocks()">Buy</button>
               {{stockSymbol}} {{lastPrice | currency: "USD"}}
             </strong>
            `,
  styles: [`:host {background: pink; padding: 5px 15px 15px 15px;}`]
})
export class PriceQuoterComponent {
  // use 'EventEmitter' (subclass of 'Subject') only for emitting custom events.
  // To get an object that is both observable and observer, use RxJS 'BehaviourSubject'.
  // here, the buy output property will be used as a custom buy event
  @Output() buy: EventEmitter <Stock> = new EventEmitter();

  stockSymbol = 'IBM';
  lastPrice: number;

  constructor() {
    interval(2000)
      .subscribe(data =>
      this.lastPrice = 100 * Math.random());
  }

  buyStocks(): void {

    const stockToBuy: Stock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    };

    this.buy.emit(stockToBuy);
  }
}
