import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastController: ToastController
  ) { }


  async presentToast(mensaje: string, color: string, duration: number) {
    const toast = await this.toastController.create( {
      message: mensaje,
      cssClass: color,
      duration: duration,
      position: 'bottom'
    });
    toast.present();
  }


}
