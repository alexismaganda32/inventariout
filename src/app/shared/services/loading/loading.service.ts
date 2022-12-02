import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    public loading: LoadingController
  ) { }

  async presentLoading(mensaje: string, color: string) {
    // Loading
    const loading = await this.loading.create({
      message: mensaje,
      spinner: "bubbles",
      cssClass: color
    });
    await loading.present();
  }

  async stopLoading() {
    await this.loading.dismiss();
  }

}
