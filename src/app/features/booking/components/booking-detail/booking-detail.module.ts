import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../../../shared/shared.module';
import { BookingDetailComponent } from './booking-detail.component';

@NgModule({
  declarations: [BookingDetailComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [BookingDetailComponent],
})
export class BookingDetailModule {}
