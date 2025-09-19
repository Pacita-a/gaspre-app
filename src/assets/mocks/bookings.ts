import { ClassEnum } from 'src/app/core/enums/class';
import { BookingDetail } from 'src/app/core/models/booking-detail/booking-detail.model';

export const bookingsMock: BookingDetail[] = [
  {
    active: true,
    id: '1',
    className: ClassEnum.GYM,
    teacher: 'Paz Armani',
    place: 5,
  },
  {
    active: true,
    id: '2',
    className: ClassEnum.YOGA,
    place: 6,
    teacher: 'Lucas Gonzalez',
  },
  {
    active: true,
    id: '3',
    className: ClassEnum.SPINNING,
    teacher: 'Andrea Perez',
    place: 13,
  },
  {
    active: true,
    id: '4',
    className: ClassEnum.CROSS_FIT,
    teacher: 'Jorge Petersen',
    place: 9,
  },
];
