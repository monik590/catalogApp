import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SolicitudComponent} from './components/solicitud/solicitud.component';
import {ProductosComponent} from './components/productos/productos.component';
import {ProductoComponent} from './components/producto/producto.component';
import{TemplateComponent} from './components/template/template.component'
import {ResultadosBuscaProductosComponent} from './components/resultados-busca-productos/resultados-busca-productos.component';

const APP_ROUTES:Routes = [
  {path:'Inicio', component:HomeComponent},
  {path:'solicitud', component:SolicitudComponent},
  {path:'productos', component:ProductosComponent},
  {path:'producto/:id', component:ProductoComponent},
  {path:'ResultadosBuscaProductos/:campoBusqueda', component:ResultadosBuscaProductosComponent},
  {path:'template',component:TemplateComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
