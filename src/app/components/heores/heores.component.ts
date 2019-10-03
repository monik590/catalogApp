import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heores',
  templateUrl: './heores.component.html'
})
export class HeoresComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor( private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number){
    this.router.navigate(['heroe',index]);
  }

}
