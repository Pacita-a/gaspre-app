export interface BookingDetail {
  active: boolean;
  id: string;
  className: string; // TODO: create objet Class
  teacher: string; // TODO: create objet Teacher
  place: number;
  description?: string;
}
