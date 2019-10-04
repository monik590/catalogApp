import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Routes
import {APP_ROUTING} from './app.routes';

//services
import {ProductosService} from './services/productos.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ResultadosBuscaProductosComponent } from './components/resultados-busca-productos/resultados-busca-productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { TemplateComponent } from './components/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SolicitudComponent,
    ProductosComponent,
    ProductoComponent,
    ResultadosBuscaProductosComponent,
    ProductoTarjetaComponent,
    TemplateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
