import { TestBed } from '@angular/core/testing';

import { StocksViewService } from './stocks-view.service';

describe('StocksViewService', () => {
  let service: StocksViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocksViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
