import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MultasService {
  //obtener el url
  private baseUrl: string = environment.inventarioUTAPI;
  // inyectar httpclient
  constructor(private http: HttpClient) {}

  //consumir con el verbo
  public getMultas() {
    // return this.http.get(`${this.baseUrl}/Multas`);

    return this.http.get('/assets/data/multas.json');
  }
  // obtener multa por id
  public getMultaPorId(id) {
    return this.http.get(`${this.baseUrl}/Multas/${id}`);
  }
}
