import { Component, OnInit } from '@angular/core';
import {StocksViewService} from '../../services/stocks-view.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {
  newSymbol: string;
  newPrice: number;

  constructor(private stockService: StocksViewService, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.stockService.addStock({
      created: new Date(),
      symbol: this.newSymbol.toUpperCase(),
      price: this.newPrice
    })
    this.router.navigate([`stocks`])
  }
}
