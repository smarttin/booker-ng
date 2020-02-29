import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { RentalComponent } from './rental.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalRoutingModule } from './rental-routing.module';
import { UppercasePipe } from '../Common/pipes/uppercase.pipe';
import { MapModule } from '../Common/map/map.module';


@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    HttpClientModule,
    NgPipesModule,
    MapModule
  ],
  providers: []
})

export class RentalModule {}
