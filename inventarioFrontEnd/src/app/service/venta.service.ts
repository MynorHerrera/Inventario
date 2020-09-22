import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: localStorage.getItem("token")
    })
  };

  public url = "http://localhost:3000/api";

  constructor(private _http : HttpClient) {  }

  guardar(venta) : Observable<any>{
    return this._http.post(`${this.url}/venta`,venta, this.httpOptions);
  }

//   listar() : Observable<any>{
//     return this._http.get(`${this.url}/producto`, this.httpOptions);
//   }
}
