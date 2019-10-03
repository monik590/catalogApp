import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {APP_ROUTING} from './app.routes';

//services
import {ProductosService} from './services/productos.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ResultadosBuscaProductosComponent } from './components/resultados-busca-productos/resultados-busca-productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    ProductoComponent,
    ResultadosBuscaProductosComponent,
    ProductoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
