import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDetailComponent } from './components/stock-detail/stock-detail.component'
import { StockListComponent } from './components/stock-list/stock-list.component'
import { AddStockComponent } from './components/add-stock/add-stock.component';

const routes: Routes = [
  {path: '', redirectTo:'stocks', pathMatch: 'full'},
  {path: 'stocks', component: StockListComponent },
  {path: 'stocks/:sym', component: StockDetailComponent },
  {path: 'new', component: AddStockComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
