import { Component, OnInit } from '@angular/core';
import { Edificio } from '../../interface/edificio.Interface';
import { EdificiosService } from '../../services/edificios.service';
import { TallerService } from '../../services/taller.service';
import { Taller } from '../../interface/taller.interface';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { slideOpts } from '../../interface/slideopts.interface';
@Component({
  selector: 'app-edificio-page',
  templateUrl: './edificio-page.component.html',
  styleUrls: ['./edificio-page.component.scss'],
})
export class EdificioPageComponent implements OnInit {

  constructor(
    private edificiosService: EdificiosService,
    private tallerService: TallerService,
    private router: Router,
  ) { }

  edificios: Edificio[];
  edificioSeleccionado: number;
  talleres: Taller[];

  banners: string[] = ["assets/img/brushes.jpg","assets/img/painting.jpg", "assets/img/plumbing.jpg","assets/img/tools.jpg"]

  slideOptions = slideOpts;

  ngOnInit(): void {
      this.edificiosService.obtenerListaEdificiosConSusTalleres().subscribe((response) => {
        this.edificios = response;
      });
    }

  obtenerTaller(event: Event) {
      this.edificioSeleccionado = (event as CustomEvent).detail.value;

      this.tallerService.getTalleresPorEdificioId(this.edificioSeleccionado).subscribe((response: Taller[]) => {
        this.talleres = response;
      })
    }

  verHerramientas(idTaller: number) {
      this.router.navigate(["layout/herramientas/listado", { idTaller: JSON.stringify(idTaller) }])
    }

  }
