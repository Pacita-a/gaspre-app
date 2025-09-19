import { Mapper } from 'src/app/shared/base/mapper';
import { BookingDetailEntity } from './booking-detail';
import { BookingDetail } from './booking-detail.model';

export class BookingDetailMapper extends Mapper<
  BookingDetailEntity,
  BookingDetail
> {
  mapFrom(param: BookingDetailEntity): BookingDetail {
    return {
      id: param.id,
      active: param.active,
      className: param.class_name,
      teacher: param.teacher,
      place: param.place,
      description: param.description,
    };
  }

  mapTo(param: BookingDetail): BookingDetailEntity {
    return {
      id: param.id,
      active: param.active,
      class_name: param.className,
      teacher: param.teacher,
      place: param.place,
      description: param.description,
    };
  }
}
