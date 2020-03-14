import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rental-search',
  templateUrl: './rental-search.component.html',
  styleUrls: ['./rental-search.component.scss']
})
export class RentalSearchComponent implements OnInit {
  rentals: Rental[] = [];
  errors: any[] = [];
  city: string;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params.city;
      this.getSeachedRentals(params.city);
    });
  }

  getSeachedRentals(city: string) {
    this.errors = [];
    this.rentals = [];

    this.rentalService.getRentalsByCity(city).subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

}
