import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    IonicModule
  ]
})
export class PerfilModule { }
