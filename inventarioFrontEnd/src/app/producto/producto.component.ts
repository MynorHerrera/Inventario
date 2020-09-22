import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formproductos : Producto = {
    nombre : "",
    precio : "",
    cantidad : 0,
    categoria : ""
  }

  productos : Array<Producto> = [];

  constructor(private sp : ProductoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.sp.listar().subscribe((data)=>{
      this.productos = data.datos
    }, err =>{

    });
  }

  guardar(){
    this.sp.guardar(this.formproductos).subscribe((data)=>{
      if(!data.ok){
        alert("Error al guardar los datos")
      }else{
        alert("Datos ingresados correctamente")
        this.listar();
        //borra los campos para ingresar nueva info
        this.formproductos = {
          nombre: "",
          precio:"",
          cantidad: 0,
          categoria:""
        }
      }
    }), err => {
      alert(err);
    }
  }

}
