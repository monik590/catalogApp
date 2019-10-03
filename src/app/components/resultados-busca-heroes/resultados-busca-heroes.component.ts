import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resultados-busca-heroes',
  templateUrl: './resultados-busca-heroes.component.html'
})
export class ResultadosBuscaHeroesComponent implements OnInit {

  heroesEncontrados:any[] = [];
  campoBusqueda:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>{
        this.campoBusqueda = params['campoBusqueda'];
        this.heroesEncontrados = this._heroesService.buscarHeroe( params['campoBusqueda']);
      })
  }

  verHeroe(index:number){
    this.router.navigate(['heroe',index]);
  }

}
