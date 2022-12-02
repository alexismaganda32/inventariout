import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Herramienta } from '../../interfaces/herramienta';
import { Marca } from '../../interfaces/marca';

import { HerramientaService } from '../../services/herramienta/herramientas.service';
import { LoadingService } from '../../../shared/services/loading/loading.service';
import { MarcaService } from '../../services/marca/marca.service';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { StorageService } from '../../../shared/services/storage/storage.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute,
    public herramientaService: HerramientaService,
    public storageService: StorageService,
    public marcaService: MarcaService,
    public loading: LoadingService,
    public toast: ToastService,
  ) { }

  editable: boolean;
  brands: Marca[];

  herramienta: Herramienta = new Herramienta();
  public reader = new FileReader();
  preview: string;

  idTaller: number;

  ngOnInit() {
    // si recibo un idHerramienta es EDITABLE
    if (this.activatedRoute.snapshot.params.idHerramienta != undefined) {

      this.herramientaService.getHerramienta((JSON.parse(this.activatedRoute.snapshot.params.idHerramienta)))
        .subscribe((response: Herramienta) => {
          this.herramienta = response;
          this.preview = response.urlimagen
        });
      this.editable = true;

      // si no recibo idHerramienta es para AGREGAR
    } else {
      this.idTaller = JSON.parse(this.activatedRoute.snapshot.params.idTaller);
      this.editable = false;
    }

    // I Call all the tool brands
    this.marcaService.getMarcas().subscribe((response: Marca[]) => {
      this.brands = response;
    });

  }

  ediTool(id: number, tool: Herramienta) {
    this.loading.presentLoading("Editando herramienta por favor espere...", "primary");

    if (this.reader.result != null) {
      this.storageService.subirImagen("Herramienta/" + Date.now().toString(), this.reader.result).then((imageURLFirebase: any) => {
        tool.urlimagen = imageURLFirebase; // Firebase return the URL of the img, we have to use it to change img
        this.herramientaService.putHerramienta(id, tool).subscribe(() => {
          this.loading.stopLoading();
          this.toast.presentToast("Se modificó la herramienta exitosamente", "success", 4000)
        },
          () => {
            this.loading.stopLoading();
            this.toast.presentToast("No se pudo editar la herramienta", "danger", 4000)
          });
      });
    } else {
      this.herramientaService.putHerramienta(id, tool).subscribe(() => {
        this.loading.stopLoading();
        this.toast.presentToast("Se modificó la herramienta exitosamente", "success", 4000)
      },
        () => {
          this.loading.stopLoading();
          this.toast.presentToast("No se pudo editar la herramienta", "danger", 4000)
        });
    }
  }


  addTool(herramienta: Herramienta) {
    this.loading.presentLoading("Insertando herramienta, espere un segundo...", "primary")
    // Agrega la herramienta
    this.storageService.subirImagen("Herramienta/" + Date.now().toString(), this.reader.result).then((imageURLFirebase: any) => {
      herramienta.urlimagen = imageURLFirebase;
      herramienta.idEstatus = 1; // by default all tools available
      herramienta.idTaller = this.idTaller;

      this.herramientaService.postHerramienta(herramienta).subscribe((response: any) => {
        this.toast.presentToast("Exito, herramienta agregada", "success", 4000);
        this.loading.stopLoading();
      },
        () => {
          this.loading.stopLoading();
          this.toast.presentToast("No se pudo agragar la herramienta", "danger", 4000);
        });
    });
  }

  // user is charging an image, we have to give a preview
  chargeImage(event: any) {
    let archivo = event.target.files

    this.reader.readAsDataURL(archivo[0]);

    // Set image to preview
    this.reader.onloadend = () => {
      this.preview = this.reader.result.toString();
    }
  }

  clearImage() {
    this.preview = null;
  }

}
