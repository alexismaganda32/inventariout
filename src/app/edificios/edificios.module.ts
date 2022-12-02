import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EdificiosRoutingModule } from './edificios-routing.module';
import { EdificioPageComponent } from './pages/edificio-page/edificio-page.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [EdificioPageComponent],
  imports: [CommonModule, EdificiosRoutingModule, IonicModule, SwiperModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class EdificiosModule {}
