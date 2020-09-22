import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventarioFrontEnd';
  constructor(private r : Router) {  }

  cerrarsesion(){
    localStorage.removeItem("token");
    localStorage.removeItem("usuariod");
    this.r.navigate(["login"]);
    this.oncheckuser()
  }

  public islogged: boolean = false

  ngOnInit(){
    this.oncheckuser();
  }

  oncheckuser(){
    var tokenParaComprobar = localStorage.getItem('token');
    if(tokenParaComprobar != null){
      this.islogged =  false
    }else{
      this.islogged = true;
    }
  }



}
