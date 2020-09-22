import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component'
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard'

export const routes: Routes = [
    { path: 'usuario', component: UsuarioComponent, canActivate : [AuthGuard]},
    { path: 'producto', component: ProductoComponent, canActivate : [AuthGuard]},
    { path: 'venta', component: VentaComponent, canActivate : [AuthGuard]},
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
  ];
  