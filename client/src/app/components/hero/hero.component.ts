import { Component, OnInit } from '@angular/core';
import { HeroApiService } from 'src/app/services/hero-api.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 
  heroes: Hero[];
  hero: Hero;

  constructor(private heroService: HeroApiService) {
    console.log('HeroComponent constructor');
   }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes() {
    this.heroService.getHeroes().subscribe( (data) => {
      console.log(data);
      this.heroes = data['heroes'];
    });
  }
}
