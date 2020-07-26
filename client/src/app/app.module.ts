import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';

import { VillianComponent } from './components/villians/villian.component';

import { AbilityComponent } from './components/ability/ability.component';
import { LocationComponent } from './components/location/location.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContentComponent } from './templates/content/content.component';
import { FooterComponent } from './templates/footer/footer.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { HeroesDashboardComponent } from './components/heroes-dashboard/heroes-dashboard.component';
import { VilliansDashboardComponent } from './components/villians-dashboard/villians-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {AccordionModule} from 'primeng/accordion'; 
import {TabViewModule} from 'primeng/tabview';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    VillianComponent,
    AbilityComponent,
    LocationComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    HeroesDashboardComponent,
    VilliansDashboardComponent,
    LandingPageComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
