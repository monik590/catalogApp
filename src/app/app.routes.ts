import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeoresComponent} from './components/heores/heores.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {ResultadosBuscaHeroesComponent} from './components/resultados-busca-heroes/resultados-busca-heroes.component';

const APP_ROUTES:Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'heroes', component:HeoresComponent},
  {path:'heroe/:id', component:HeroeComponent},
  {path:'ResultadosBuscaHeroes/:campoBusqueda', component:ResultadosBuscaHeroesComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
