import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageComponent } from './manage.component';
import { NgPipesModule } from 'ngx-pipes';
import { FormatDatePipe } from '../Common/pipes/format-date-pipe';
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';

@NgModule({
  declarations: [
    ManageRentalComponent,
    ManageBookingComponent,
    ManageComponent,
    FormatDatePipe,
    ManageRentalBookingComponent
  ],
  imports: [CommonModule, ManageRoutingModule, NgPipesModule]
})
export class ManageModule {}
