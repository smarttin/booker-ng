import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalComponent } from './rental.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalRoutingModule } from './rental-routing.module';


@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  providers: []
})

export class RentalModule {}
