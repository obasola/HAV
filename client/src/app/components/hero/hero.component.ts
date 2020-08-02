import { Component, OnInit } from '@angular/core';
import { HeroApiService } from 'src/app/services/hero-api.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 
  heroes: Array<{}>;
  hero: Hero;

  constructor(private heroService: HeroApiService) {
    console.log('HeroComponent constructor');
   }

  ngOnInit() {
    this.loadHeroes();
  }

  async loadHeroes() {
    await this.heroService.getHeroes().subscribe( (data) => {
      console.log(data);
      if(data) {
        this.heroes = this.convertObject2Array(data);
      }
    });
  }
  
  convertObject2Array(data) {
    let propnames = Object.keys(data);
    let propvalues = Object.values(data);
    return this.convertUpdateArguments(propvalues);
  }
  convertUpdateArguments(propvalues) {
    let datalist: [{}];
    for(let a =0; a < propvalues.length; a++) {
      
      let mutant = new Hero();

      mutant.id = propvalues[a].id;
      mutant.name = propvalues[a].name;
      mutant.secretIdentity = propvalues[a].secretIdentity;
      if(!datalist) {
        datalist = [mutant];
      }else{
        datalist.push(mutant); 
      }
      
      
    }
    return datalist;
  }
}
