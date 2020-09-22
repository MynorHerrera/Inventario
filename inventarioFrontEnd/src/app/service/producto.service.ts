import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: localStorage.getItem("token")
    })
  };

  public url = "http://localhost:3000/api";

  constructor(private _http : HttpClient) {  }

  guardar(producto : Producto) : Observable<any>{
    return this._http.post(`${this.url}/producto`,producto, this.httpOptions);
  }

  listar() : Observable<any>{
    return this._http.get(`${this.url}/producto`, this.httpOptions);
  }
}
