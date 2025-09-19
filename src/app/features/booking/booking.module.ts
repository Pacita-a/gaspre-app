import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingDetailModule } from './components/booking-detail/booking-detail.module';

@NgModule({
  declarations: [BookingListComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BookingDetailModule,
  ],
  exports: [DashboardComponent],
})
export class BookingModule {}
