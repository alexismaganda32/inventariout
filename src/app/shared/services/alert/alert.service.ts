import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertController: AlertController
  ) { }

  // Presenta un alert con una unica opción que dice Ok. Nota: no relaiza acciones adicionales
  async presentAlert(color: string, header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: color,
      header: header,
      subHeader: message,
      buttons: ['Ok'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Presenta un alert con un array de una o varias opciones (buttons) en las que se realiza una acción al seleccionar alguna.
  // Recibe un array con la siguiente estructura: en la que handler realiza la acción deseada al seleccionar la opción
  // [
  //   {
  //     text: '¡No, Cancelar!',
  //     handler: () => {
  //       console.log('Cancelado');
  //       this.loading.presentLoading("cargando", "success")
  //     }
  //   }
  // ]

  async presentAlertOptions(header: string, message: string, color: string , buttons: any[]) {
    
    const alert = await this.alertController.create({
      cssClass: color,
      header: header,
      subHeader: message,
      buttons: buttons
    });

    await alert.present();

  }
}
