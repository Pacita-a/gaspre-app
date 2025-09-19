import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingListComponent } from './features/booking/components/booking-list/booking-list.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingListComponent,
  },
  { path: '**', redirectTo: 'bookings' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
