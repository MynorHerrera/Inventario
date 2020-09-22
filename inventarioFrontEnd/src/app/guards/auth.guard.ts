import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: localStorage.getItem("token")
    })
  };
  
  public url = "http://localhost:3000/api";

  constructor(private _http : HttpClient, private r : Router) {  }

  canActivate(){
    var tokenParaComprobar = localStorage.getItem('token');
    if(tokenParaComprobar != null){
      return true;
    }else{
      this.r.navigate(["login"])
      return false;
    }
  }
}
