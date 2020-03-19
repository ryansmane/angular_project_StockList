import { Injectable } from '@angular/core';
import { Stock } from '../models/Stock'
import { SEEDSTOCKS } from '../seeds/seeds'
@Injectable({
  providedIn: 'root'
})
export class StocksViewService {
  allStocks: Stock[] = [
    {
      symbol: "ABC",
      price: 21.54,
      created: new Date()
    },
    {
      symbol: "DEF",
      price: 90.09,
      created: new Date()
    },
    {
      symbol: "XYZ",
      price: 12.02,
      created: new Date()
    }
  ];
  
  constructor() { }

  addStock(stock: Stock): void {
    this.allStocks.push(stock)
  }

  getStocks(): Stock[] {
    return this.allStocks;
  }

  getBySymbol(symbol: string): Stock {
    return this.allStocks.find(stock => stock.symbol === symbol);
  }

  buyStockX(x:Stock, numberOfShares:number): void {
    const selectedStock = this.allStocks.find(stock => stock.symbol === x.symbol);
    selectedStock.price+=0.01*numberOfShares;
  } 
}
