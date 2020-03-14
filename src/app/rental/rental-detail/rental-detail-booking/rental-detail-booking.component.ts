import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Booking } from 'src/app/booking/shared/booking.model';
import { HelperServcie } from 'src/app/Common/services/helper.service';
import * as moment from 'moment';
import { Rental } from '../../shared/rental.model';
import { BookingService } from 'src/app/booking/shared/booking.service';
import { ToastrService } from 'ngx-toastr';
import { DaterangepickerComponent } from 'ng2-daterangepicker';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-rental-detail-booking',
  templateUrl: './rental-detail-booking.component.html',
  styleUrls: ['./rental-detail-booking.component.scss']
})
export class RentalDetailBookingComponent implements OnInit {
  @Input() rental: Rental;
  @ViewChild(DaterangepickerComponent, {static: false})
  private picker: DaterangepickerComponent;

  newBooking: Booking;
  modalRef: any;
  daterange: any = {};
  errors: any[] = [];
  options: any = {
    locale: { format: Booking.DATE_FORMAT },
    alwaysShowCalendars: false,
    opens: 'left',
    autoUpdateInput: false,
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  bookedOutDates: any[] = [];

  constructor(
    private helperService: HelperServcie,
    private modalService: NgbModal,
    private bookingService: BookingService,
    private toastr: ToastrService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.newBooking = new Booking();
    this.getBookedOutDates();
  }

  private checkForInvalidDates(date) {
    return this.bookedOutDates.includes(this.helperService.BookingDateFormat(date)) || date.diff(moment(), 'days') < 0;
  }

  private getBookedOutDates() {
    const bookings: Booking[] = this.rental.bookings;

    if (bookings && bookings.length > 0) {
      for (const booking of bookings) {
        const dateRange = this.helperService.getBookingRangeOfDates(booking.startAt, booking.endAt);
        this.bookedOutDates.push(...dateRange);
      }
    }
  }

  private addNewBookedOutDates(bookingData: any) {
    const dateRange = this.helperService.getBookingRangeOfDates(bookingData.startAt, bookingData.endAt);
    this.bookedOutDates.push(...dateRange);
  }

  private resetDatePicker() {
    this.picker.datePicker.setStartDate(moment());
    this.picker.datePicker.setEndDate(moment());
    this.picker.datePicker.element.val('');
  }

  openConfirmModal(content) {
    this.errors = [];
    this.modalRef = this.modalService.open(content);
  }

  createBooking() {
    this.newBooking.rental = this.rental;
    this.bookingService.postCreateBooking(this.newBooking).subscribe(
      (bookingData) => {
        this.addNewBookedOutDates(bookingData);
        this.newBooking = new Booking();
        this.modalRef.close();
        this.resetDatePicker();
        this.toastr.success('Booking successfully created, check booking details in manage section', 'Success!');
      },
      (errorResponse: any) => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

  selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    this.options.autoUpdateInput = true;
    this.newBooking.startAt = this.helperService.BookingDateFormat(value.start);
    this.newBooking.endAt = this.helperService.BookingDateFormat(value.end);
    this.newBooking.days = -(value.start.diff(value.end, 'days'));
    this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  }

}
