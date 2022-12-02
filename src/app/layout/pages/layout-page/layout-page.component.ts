import { Component, OnInit } from '@angular/core';
import { MultaDetallePageComponent } from 'src/app/multas/pages/multa-detalle-page/multa-detalle-page.component';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ThemeService } from '../../../shared/services/theme/theme.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
})
export class LayoutPageComponent {

  multaDetalle = MultaDetallePageComponent;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public themeService: ThemeService,
    public authService: AuthService,  
    public toast: ToastService,
    public nav: NavController,
  ) {
    this.initializeApp();
  }

  theme: boolean = this.themeService.getTheme();

  appPages = [
    {
      title: 'Perfil',
      url: '/layout/perfil',
      icon: 'person'
    },
    {
      title: 'Edificios',
      url: '/layout/edificios',
      icon: 'home'
    },
    {
      title: 'Mis Ordenes',
      url: '/layout/ordenes',
      icon: 'bookmark'
    }
  ];

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.themeService.setTheme();
    });
  }

  logout(){
    this.toast.presentToast("Saliste de tu cuenta, sayonara 😘","danger",4000);
    this.authService.logout();
    this.nav.navigateRoot('auth', { animated: false });
  }
}
