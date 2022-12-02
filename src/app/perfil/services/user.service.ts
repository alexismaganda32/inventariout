import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) { }

  url = environment.inventarioUTAPI + 'usuarios/';

  public getUserInfo(email: string): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'email/' + email);
  }

}
