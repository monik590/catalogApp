import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductosService} from '../../services/productos.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultados-busca-productos',
  templateUrl: './resultados-busca-productos.component.html'
})
export class ResultadosBuscaProductosComponent implements OnInit {

  productosEncontrados:any[] = [];
  campoBusqueda:string;

  constructor(private activatedRoute:ActivatedRoute, private _productosService:ProductosService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>{
        this.campoBusqueda = params['campoBusqueda'];
        this.productosEncontrados = this._productosService.buscarProducto( params['campoBusqueda']);
      })
  }

  verProducto(index:number){
    this.router.navigate(['producto',index]);
  }

}
