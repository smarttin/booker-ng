import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYgvBfzNPPwVK6gFXX6UrJTIH6_c5PKGM'
    })
  ],
  exports: [
    MapComponent
  ],
  providers: [CamelizePipe]
})
export class MapModule { }
