import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRol } from '../../interfaces/user-rol';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRolService {

  constructor(
    public http: HttpClient,
  ) { }

  public url = environment.inventarioUTAPI + 'rolusuarios/';

  public getRolUsuario(id: number): Observable<UserRol> {
    return this.http.get<UserRol>(this.url + id);
  }

}
