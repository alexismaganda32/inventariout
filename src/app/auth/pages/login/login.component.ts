import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorFireService } from '../../services/error-fire/error-fire.service';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { NavController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: FormGroup;

  constructor(
    public nav: NavController,
    private fb: FormBuilder,
    private firebaseError: ErrorFireService,
    private authService: AuthService,
    private loading: LoadingController,
    private toast: ToastService,
  ) {
    this.loginUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void { }

  async login() {

    // Loading
    const loading = await this.loading.create({
      message: "cargando...",
      spinner: "bubbles",
      cssClass: "success"
    });
    await loading.present();

    const email = this.loginUser.value.email;
    const password = this.loginUser.value.password;

    this.authService.loginWithEmailAndPassword(email, password).then((user) => {
      if (user.user?.emailVerified) {
        this.loading.dismiss();
        this.nav.navigateForward('/layout');
      } else {
        this.loading.dismiss();
        this.toast.presentToast("Aún no estás verificado, checa tu correo! 😥", "warning", 4000);
        this.nav.navigateForward('/verificar');
      }
    }).catch((error) => {
      this.loading.dismiss();
    })
  }

  goRegistro() {
    this.nav.navigateForward("/auth/register", { animated: false })
  }

  goForgot() {
    this.nav.navigateForward("/auth/recuperar", { animated: false })
  }



}
