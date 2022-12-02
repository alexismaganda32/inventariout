import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorFireService } from '../../services/error-fire/error-fire.service';
import { ToastController, NavController } from '@ionic/angular';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {

  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError : ErrorFireService,
    private toast: ToastService,
    private nav: NavController,
  ) { 
    this.recuperarUsuario = this.fb.group({
      email: ['',[Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
  }

  recuperar(){
    const email = this.recuperarUsuario.value.email;
    this.afAuth.sendPasswordResetEmail(email).then(() => {

      this.toast.presentToast("Correo enviado con exito para recuperar password", "success", 4000)
      this.router.navigate(["/login"])
      this.loading = true;
    }).catch((error) =>{
      this.loading = true;
      // this.toastr.error(this.firebaseError.errorFire(error.code),'Error')
    })
  }

  goLogin() {
    this.nav.navigateBack("/auth/login", {animated: false});
  }

}
