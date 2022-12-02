import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultasRoutingModule } from './multas-routing.module';
import { MultasPageComponent } from './pages/multas-page/multas-page.component';
import { MultaDetallePageComponent } from './pages/multa-detalle-page/multa-detalle-page.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MultasPageComponent, MultaDetallePageComponent],
  imports: [CommonModule, MultasRoutingModule, RouterModule, IonicModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MultasModule {}
