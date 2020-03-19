import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component';
import { PriceHistoryComponent } from './components/price-history/price-history.component';
import { AddStockComponent } from './components/add-stock/add-stock.component'

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    StockDetailComponent,
    PriceHistoryComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
