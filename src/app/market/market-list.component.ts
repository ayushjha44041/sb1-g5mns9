import { Component, OnInit, inject } from '@angular/core'
import { Page } from '@nativescript/core'

import { Market } from './market'
import { MarketService } from './market.service'

@Component({
  selector: 'ns-market-list',
  templateUrl: './market-list.component.html',
})
export class MarketListComponent implements OnInit {
  page = inject(Page);
  marketService = inject(MarketService);
  markets: Array<Market>;

  constructor() {
    this.page.on('loaded', (args) => {
      if (__IOS__) {
        const navigationController: UINavigationController =
          this.page.frame.ios.controller;
        navigationController.navigationBar.prefersLargeTitles = true;
      }
    });
  }

  ngOnInit(): void {
    this.markets = this.marketService.getMarkets()
  }
}