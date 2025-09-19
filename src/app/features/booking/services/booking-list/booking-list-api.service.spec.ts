import { TestBed } from '@angular/core/testing';

import { BookingListApiService } from './booking-list-api.service';

describe('BookingListApiService', () => {
  let service: BookingListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
