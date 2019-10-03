import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ProductosComponent} from './components/productos/productos.component';
import {ProductoComponent} from './components/producto/producto.component';
import {ResultadosBuscaProductosComponent} from './components/resultados-busca-productos/resultados-busca-productos.component';

const APP_ROUTES:Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'productos', component:ProductosComponent},
  {path:'producto/:id', component:ProductoComponent},
  {path:'ResultadosBuscaProductos/:campoBusqueda', component:ResultadosBuscaProductosComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
