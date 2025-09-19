import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BookingDetail } from 'src/app/core/models/booking-detail/booking-detail.model';
import { BookingListApiService } from '../../services/booking-list/booking-list-api.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  public bookings$?: Observable<BookingDetail[]>;
  selectedClass?: BookingDetail;

  constructor(private bookingListService: BookingListApiService) {}

  ngOnInit(): void {
    this.bookings$ = this.bookingListService
      .getBookingList()
      .pipe(map((bookings) => [...bookings]));
  }

  viewMore(booking: BookingDetail) {
    console.log(booking)
    this.selectedClass = booking;
  }

  public deleteBooking(booking: BookingDetail) {}

  closeModal() {
    this.selectedClass = undefined;
  }
}
