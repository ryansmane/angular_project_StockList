import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.css']
})
export class PriceHistoryComponent implements OnInit {
  @Input() receipts: [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
