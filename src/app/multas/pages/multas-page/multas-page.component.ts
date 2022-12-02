import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { MultasService } from '../../services/multas-service';
import { MultaDetallePageComponent } from '../multa-detalle-page/multa-detalle-page.component';

@Component({
  selector: 'app-multas-page',
  templateUrl: './multas-page.component.html',
  styleUrls: ['./multas-page.component.scss'],
})
export class MultasPageComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  //declarar variable
  multas: any;

  //inyectar servicio
  constructor(private multasService: MultasService) {}

  //declarar la funcion
  ngOnInit() {
    this.multasService.getMultas().subscribe((listaMultas) => {
      console.log(listaMultas);
      this.multas = listaMultas;
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss('confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    console.log(this.multas);
  }
}
