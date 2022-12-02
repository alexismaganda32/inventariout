import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HerramientaService } from '../../services/herramienta/herramientas.service';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { ToastService } from '../../../shared/services/toast/toast.service';

import { Herramienta } from '../../interfaces/herramienta';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/auth/interfaces/user';
import { UserService } from '../../../perfil/services/user.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { UserRolService } from '../../../auth/services/rol/user-rol.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor(
    public router: Router,
    public herramientaService: HerramientaService,
    public alert: AlertService,
    public toast: ToastService,
    public activatedRoute: ActivatedRoute,
    public userService: UserService,
    public auth: AuthService,
    protected userRol: UserRolService,
  ) { }

  idTaller: number;
  herramientasDelTaller: Herramienta[];
  usuario: User[];

  carrito: string[] = new Array;

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.idTaller != undefined) {
      this.idTaller = JSON.parse(this.activatedRoute.snapshot.params.idTaller);
    }

    this.auth.getUserLogged().subscribe((response) => {

      this.userService.getUserInfo(response.email).subscribe((response: User[]) => {   
        this.usuario = response;
        // this.userRol.getRolUsuario(this.usuario.idRolUsuario).subscribe((response) => {
        //   console.log(response);
        // });
      });
    });
  }
  
  ionViewWillEnter(){
    this.getList();
  }
  
  // Obtenemos todas las herramientas de un determinado taller
  getList(){
    this.herramientaService.getHerramientasPorIdTaller(this.idTaller).subscribe((response: Herramienta[]) => {
      this.herramientasDelTaller = response;
    });
  }

  // método para dirigirse a: agregar herramienta
  agregarHerramienta(idTaller: number) {
    this.router.navigate(["layout/herramientas/agregar", { idTaller: JSON.stringify(idTaller) }])
  }

  // método para dirigirse a: agregar herramienta, pero seteando una herramienta para modificarla
  editarHerramienta(idHerramienta: number) {
    this.router.navigate(["layout/herramientas/agregar", { idHerramienta: JSON.stringify(idHerramienta) }])
  }

  // método para eliminar herramientas, presenta una alerta para confirmar su eliminación que llama al AlertService
  async eliminarHerramienta(idHerramienta: number, indice: number) {
    this.alert.presentAlertOptions("¿Aceptas eliminar esta Herramienta?", "Esta acción no se puede revertir", "danger",
      [
        {
          text: 'Cancelar',
          handler: () => { }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.herramientaService.deleteHerramienta(idHerramienta).subscribe(() => {
              this.toast.presentToast("herramienta eliminada", "success", 4000);
              this.herramientasDelTaller.splice(indice, 1);
            })
          }
        }
      ]
    )
  }

  agregar(herramienta: string) {
    this.carrito.push(herramienta)
    this.toast.presentToast("Herramienta agregada", "dark", 4000);
  }

  ver() {
    console.log(this.carrito);
  }

}
