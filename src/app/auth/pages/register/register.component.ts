import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast/toast.service';
import { LoadingController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user/users.service';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    public toast: ToastService,
    public loading: LoadingController,
    public uService: UserService,
    public nav: NavController,
    private auth: AuthService,
    private autF: AngularFireAuth
  ) {
    this.registerUser = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      matricula: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirpassword: ['', Validators.required],
    });
  }
  usuario: User = new User();

  ngOnInit() { }

  async registrar() {
    // Loading
    const loading = await this.loading.create({
      message: 'cargando...',
      spinner: "bubbles",
      cssClass: 'primary'
    });
    await loading.present();

    const name = this.registerUser.value.name;
    const lastName = this.registerUser.value.lastName;
    const email = this.registerUser.value.email;
    const matricula = this.registerUser.value.matricula;
    const password = this.registerUser.value.password;
    const repetirpassword = this.registerUser.value.repetirpassword;

    if (password !== repetirpassword) {
      this.loading.dismiss();
      this.toast.presentToast("Las contraseñas no son iguales 😒", "danger", 4000);
      return;
    }
    else {
      this.auth.registrarse(email, password).then(() => {
        
        this.loading.dismiss();
        
        this.usuario.nombre = name;
        this.usuario.apellido = lastName;
        this.usuario.correo = email;
        this.usuario.matricula = matricula;
        this.usuario.idRolUsuario = 1;
        
        this.uService.addUser(this.usuario).subscribe(() => {
          this.verificarCoreo();
        });
      })
        .catch((error) => {
          this.loading.dismiss();
          this.toast.presentToast("Hubo un errorsito desconocido: " + error, "danger", 4000);
        });
    }
  }

  verificarCoreo() {
    this.autF.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {

        this.toast.presentToast("Usuario registrado con exito 😍", "success", 4000);

        this.toast.presentToast("Te enviamos un correo para verificar tu correo electronico 😇", "warning", 4000);

        this.router.navigate(['/login']);
      });
  }

  goLogin() {
    this.nav.navigateBack("/auth/login", { animated: false });
  }

}
