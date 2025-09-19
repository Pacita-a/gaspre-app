export interface BookingDetailEntity {
  active: boolean;
  id: string;
  class_name: string; // TODO: create objet Class
  teacher: string; // TODO: create objet Teacher
  place: number;
  description?: string;
}
