import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ErrorFireService } from '../error-fire/error-fire.service';
import { ToastService } from '../../../shared/services/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseError: ErrorFireService,
    public auth: AngularFireAuth,
    private toast: ToastService,
  ) { }

  async registrarse(email: string, password: string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password);
    } catch(error) {
      this.toast.presentToast(this.firebaseError.errorFire(error.code), "danger", 4000);
    }
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.toast.presentToast(this.firebaseError.errorFire(error.code), "tertiary", 4000);
    }
  }

  async loginWithGoogle() {
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    } catch(error) {
      console.log(error);
    }
  }

  getUserLogged() {
    return this.auth.authState;
  }

  logout() {
    return this.auth.signOut();
  }

}
