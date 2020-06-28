import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent }    from './components/hero/hero.component';

import { HeroesDashboardComponent } from "./components/heroes-dashboard/heroes-dashboard.component";
import { VilliansDashboardComponent } from "./components/villians-dashboard/villians-dashboard.component";

import { VillianComponent } from './components/villians/villian.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'heroes', component: HeroesDashboardComponent},
  { path: 'villain', component: VillianComponent },
  { path: 'villians', component: VilliansDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
