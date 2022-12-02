import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Taller } from '../interface/taller.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TallerService {

  constructor(
    private http: HttpClient
  ) { }


  url = environment.inventarioUTAPI + "talleres/";


  getTalleresPorEdificioId(id: number):Observable<Taller[]> {
    return this.http.get<Taller[]>(this.url + "edificio/" + id);
  }

}
