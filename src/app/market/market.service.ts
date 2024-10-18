import { Injectable } from '@angular/core'

import { Market } from './market'

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  private markets = new Array<Market>(
    {
      id: 1,
      name: 'Central Farmers Market',
      location: 'Downtown',
      products: ['Tomatoes', 'Cucumbers', 'Carrots'],
      prices: { Tomatoes: 2.5, Cucumbers: 1.5, Carrots: 1.0 }
    },
    {
      id: 2,
      name: 'Riverside Agricultural Hub',
      location: 'Riverside',
      products: ['Apples', 'Pears', 'Grapes'],
      prices: { Apples: 3.0, Pears: 2.5, Grapes: 4.0 }
    },
    {
      id: 3,
      name: 'Green Valley Produce',
      location: 'Suburbs',
      products: ['Lettuce', 'Spinach', 'Kale'],
      prices: { Lettuce: 1.5, Spinach: 2.0, Kale: 2.5 }
    }
  )

  getMarkets(): Array<Market> {
    return this.markets
  }

  getMarket(id: number): Market {
    return this.markets.filter((market) => market.id === id)[0]
  }
}