import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = {
    usuario : "",
    clave: ""
  }

  constructor(private _us : UsuarioService, private r : Router, private a : AppComponent) { }

  ngOnInit(): void {
  }

  ingresar(){
    this._us.login(this.usuario).subscribe((data)=>{
      if(data.ok){
        localStorage.setItem("token",data.token);
        this.a.oncheckuser()
        this.r.navigate(["usuario"]);
      }else{
        alert(data.mensaje)
      }
    }, err => {
      alert(err.error.mensaje)
    })
  }

}
