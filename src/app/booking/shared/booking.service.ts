import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  postCreateBooking(bookingData: Booking) {
    return this.http.post('/api/v1/bookings/', bookingData);
  }

  getUserBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('/api/v1/bookings/manage');
  }
}
