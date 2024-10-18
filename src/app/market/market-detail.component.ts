import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Market } from './market';
import { MarketService } from './market.service';

@Component({
  selector: 'ns-market-detail',
  templateUrl: './market-detail.component.html',
})
export class MarketDetailComponent implements OnInit {
  market: Market;

  constructor(
    private marketService: MarketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.market = this.marketService.getMarket(id);
  }
}