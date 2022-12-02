import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Herramienta } from '../../interfaces/herramienta';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  constructor(
    private http: HttpClient
  ) { }
  private url = environment.inventarioUTAPI + 'herramientas/';

  // obtiene todas las herramientas sin importar el taller al que pertenezcan
  getHerramientas(): Observable<Herramienta[]> {
    return this.http.get<Herramienta[]>(this.url)
  }

  // obtiene una herramientas específica, recibe idHerramienta
  getHerramienta(idHerramienta: number): Observable<Herramienta> {
    return this.http.get<Herramienta>(this.url + idHerramienta);
  }

  // obtiene todas las herramientas por idTaller, recibe idTaller
  getHerramientasPorIdTaller(idTaller: number): Observable<Herramienta[]> {
    return this.http.get<Herramienta[]>(this.url + "taller/" + idTaller);
  }

  // inserta una nueva herramienta, recibe objeto Herramienta
  postHerramienta(herramienta: Herramienta): Observable<void> {
    return this.http.post<void>(this.url, herramienta);
  }

  // actualiza una herramienta, recibe idHerramienta y objeto Herramienta
  putHerramienta(idHerramienta: number, herramienta: Herramienta): Observable<void> {
    return this.http.put<void>(this.url + idHerramienta, herramienta);
  }

  // elimina una herramienta
  deleteHerramienta(idHerramienta: number): Observable<void> {
    return this.http.delete<void>(this.url + idHerramienta);
  }
}