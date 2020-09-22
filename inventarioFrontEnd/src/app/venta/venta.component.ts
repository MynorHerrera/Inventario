import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ClienteService } from '../service/cliente.Service';
import { ProductoService } from '../service/producto.service';
import { VentaService } from '../service/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

    venta = {
    cliente : "",
    producto : "",
    cantidad : 0,
    precio : 0,
    productos_detalle : [],
    total : 0
    }

  clientes : [];
  productos : [];

  constructor(private sc : ClienteService, private sp : ProductoService,
    private sv: VentaService) { }

  ngOnInit(): void {
    this.sc.listar().subscribe(data =>{
      this.clientes = data;
    }, err=>{
      console.log(err)
    });

    this.sp.listar().subscribe(data =>{
      this.productos = data.datos;
    }, err=>{
      console.log(err)
    });
  }

  poner_precio(){
    let data = this.venta.producto.split("-");
    this.venta.precio = Number(data[1]);
  }

  agregar(){
    let data = this.venta.producto.split("-");

    let existe = this.venta.productos_detalle.findIndex(e=>e.producto_id == data[0]);

    if(existe != -1){
      this.venta.productos_detalle[existe]={
        producto_id : data[0],
        producto_nombre : data[2],
        cantidad : Number(this.venta.productos_detalle[existe].cantidad) + Number(this.venta.cantidad),
        precio: this.venta.precio,
        subtotal : (Number(this.venta.productos_detalle[existe].cantidad) + Number(this.venta.cantidad)) * this.venta.precio
      }
      
    }else{

    this.venta.productos_detalle.push({
      producto_id : data[0],
      producto_nombre : data[2],
      cantidad : this.venta.cantidad,
      precio: this.venta.precio,
      subtotal : this.venta.cantidad * this.venta.precio

    });
  }
    this.venta.total += Number(this.venta.cantidad) * Number(this.venta.precio);
  }

  guardar(){
    this.sv.guardar(this.venta).subscribe((data)=>{
      if(data.ok){
        alert(data.mensaje);
      }
    });
  }

}
