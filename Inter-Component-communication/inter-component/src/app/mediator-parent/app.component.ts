import {Component} from '@angular/core';
import {Stock} from './istock';

// the "Mediator"-Component, a common parent, which knows that its child 'PriceQuoterComponent' is emitting events with '@Output'
// and the child 'OrderComponent' is a consumer, which waits for the value of its '@Input()' property
@Component({
  selector: 'app-root',
  template: `
    <!-- when the mediator receives the buy event, it invokes the event handler -->
    <price-quoter (buy)="priceQuoteHandler($event)"></price-quoter>

    <!-- the stock received from <price-quoter> is passed to <order-processor> -->
    <order-processor [stock]="receivedStock"></order-processor>
  `
})
export class AppComponent {
  receivedStock: Stock;

  priceQuoteHandler(event:Stock) {
    this.receivedStock = event;
  }
}
