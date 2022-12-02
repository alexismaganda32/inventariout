import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Edificio } from '../interface/edificio.Interface';

@Injectable({
  providedIn: 'root',
})
export class EdificiosService {

  constructor(
    private http: HttpClient
    ) {}
  
  private baseUrl: string = environment.inventarioUTAPI;

  public obtenerListaEdificiosConSusTalleres(): Observable<any[]> {
    return this.http.get<Edificio[]>(`${this.baseUrl}Edificios`);
  }

}
