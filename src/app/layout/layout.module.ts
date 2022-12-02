import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { EdificiosModule } from '../edificios/edificios.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [LayoutPageComponent],
  imports: [CommonModule, LayoutRoutingModule, IonicModule, RouterModule],
  providers: [StatusBar, SplashScreen,]
})
export class LayoutModule { }
