import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  postCreateBooking(bookingData: Booking) {
    return this.http.post('/api/v1/bookings/', bookingData);
  }
}
