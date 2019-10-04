import { Component, OnInit } from '@angular/core';
import { TemplateComponent } from '../template/template.component';
import { Solicitud }    from '../../solicitud';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

//  constructor(private activatedRoute:ActivatedRoute) { }
  solicitudes:Solicitud[] = [];

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     params =>{
  //       this.campoBusqueda = params['campoBusqueda'];
  //       this.productosEncontrados = this._productosService.buscarProducto( params['campoBusqueda']);
  //     })
  // }


}
