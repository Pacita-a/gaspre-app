import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookingDetail } from 'src/app/core/models/booking-detail/booking-detail.model';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss'],
})
export class BookingDetailComponent {
  @Input() selectedClass!: BookingDetail;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  reserveClass(selectedClass: BookingDetail) {
    console.log('Reservaste la clase:', selectedClass);
    // acá podrías:
    // - llamar a un servicio
    // - guardar la reserva
    // - mostrar un toast de confirmación
    this.onClose();
  }
}
