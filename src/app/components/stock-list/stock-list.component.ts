import { Component, OnInit } from "@angular/core";
import { StocksViewService } from "../../services/stocks-view.service";
import { Stock } from "../../models/Stock";
@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.css"]
})
export class StockListComponent implements OnInit {
  stocks: Stock[];
  constructor(private stockService: StocksViewService) {}

  ngOnInit(): void {
    this.stocks = this.stockService.getStocks();
  }
}
