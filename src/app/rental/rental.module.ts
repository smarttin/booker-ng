import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';

import { RentalComponent } from './rental.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalRoutingModule } from './rental-routing.module';
import { UppercasePipe } from '../Common/pipes/uppercase.pipe';
import { MapModule } from '../Common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';

@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalDetailBookingComponent,
    RentalSearchComponent,
    RentalCreateComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    HttpClientModule,
    NgPipesModule,
    MapModule,
    Daterangepicker,
    FormsModule
  ],
  providers: []
})

export class RentalModule {}
