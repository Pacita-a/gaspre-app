import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { BookingDetail } from 'src/app/core/models/booking-detail/booking-detail.model';
import { bookingsMock } from 'src/assets/mocks/bookings';

@Injectable({
  providedIn: 'root',
})
export class BookingListApiService {
  constructor() {}

  getBookingList(): Observable<BookingDetail[]> {
    return of(bookingsMock).pipe(delay(1000));
  }
}
