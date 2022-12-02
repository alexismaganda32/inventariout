import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Marca } from '../../interfaces/marca';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    public http: HttpClient,
  ) { }


  url = environment.inventarioUTAPI + 'marcas/'


  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }

  


}
