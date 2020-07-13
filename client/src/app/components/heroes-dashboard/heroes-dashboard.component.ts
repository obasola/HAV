import { Component, OnInit } from '@angular/core';
import { HeroApiService } from 'src/app/services/hero-api.service';

@Component({
  selector: 'app-heroes-dashboard',
  templateUrl: './heroes-dashboard.component.html',
  styleUrls: ['./heroes-dashboard.component.css']
})
export class HeroesDashboardComponent implements OnInit {
  data;
  heroService: HeroApiService;

  constructor(service: HeroApiService) { 
    this.heroService = service;
  }

  ngOnInit() {
    this.loadHeroList();
  }

  loadHeroList() {
    this.data = this.heroService.getHeroes();
    console.log('data: '+this.data);
  }
}
