import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  url = environment.inventarioUTAPI + "usuarios/";

  getUsuarios(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUsuario(idUsuario: number): Observable<User> {
    return this.http.get<User>(this.url + idUsuario);
  }

  putUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(this.url + id, user);
  }

  addUser(usuario: User): Observable<void> {
    return this.http.post<void>(this.url, usuario);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.url + id);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.url + email);
  }

}
