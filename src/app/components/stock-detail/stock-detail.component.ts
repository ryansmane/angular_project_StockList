import { Component, OnInit, Output } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Stock } from '../../models/Stock'
import {StocksViewService} from '../../services/stocks-view.service'
@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  selectedStock: Stock;
  buyValue: number;
  sellValue: number;
  receipts: any[] = [];
  constructor(private stockService: StocksViewService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const symbol = this.router.snapshot.params.sym;
    this.selectedStock=this.stockService.getBySymbol(symbol.toUpperCase());
    
  }


  buy(value) {
    this.receipts.push({
      created: new Date(),
      status: 'BUY',
      quantity: value
    })
    this.stockService.buyStockX(this.selectedStock, value);
  }

  sell(value) {
    this.receipts.push({
      created: new Date(),
      status: 'SELL',
      quantity: value*-1
    })
    this.stockService.buyStockX(this.selectedStock, -value);
  }

  


}
