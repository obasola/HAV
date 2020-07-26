import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent }    from './components/hero/hero.component';

import { HeroesDashboardComponent } from "./components/heroes-dashboard/heroes-dashboard.component";
import { VilliansDashboardComponent } from "./components/villians-dashboard/villians-dashboard.component";

import { VillianComponent } from './components/villians/villian.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AbilityComponent } from './components/ability/ability.component';
import { LocationComponent } from './components/location/location.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ability', component: AbilityComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'location', component: LocationComponent },
  { path: 'villain', component: VillianComponent },
  { path: 'villians', component: VilliansDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
