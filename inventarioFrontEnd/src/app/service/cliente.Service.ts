import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: localStorage.getItem("token")
    })
  };

  public url = "http://localhost:3000/api";

  constructor(private _http : HttpClient) {  }

 // guardar(producto : Cliente) : Observable<any>{
   // return this._http.post(`${this.url}/producto`,producto, this.httpOptions);
//}

  listar() : Observable<any>{
    return this._http.get(`${this.url}/cliente`, this.httpOptions);
  }
}
