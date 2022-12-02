import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageRef = firebase.storage().ref();

  constructor() { }

  // Method to upload one image and get the url, recibe Name composed as u want and the image Base64
  async subirImagen(nombre: string, imgBase64: any) {

    try {

      let response = await this.storageRef.child(nombre).putString(imgBase64, 'data_url');

      return await response.ref.getDownloadURL(); // Return the url of the image recently stored in Firestore

      // Show the error
    } catch (error) {
      console.log(error);
    }


  }

}