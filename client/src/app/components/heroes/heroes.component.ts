import { Component, OnInit } from '@angular/core';
import { HeroApiService } from '../../services/hero-api.service';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Array<{}>;
  hero =  new Hero();
  service: HeroApiService;
   
  constructor(private heroService: HeroApiService) { 
    console.log("service = "+heroService);
    this.service = heroService;
  }

  ngOnInit() {
    this.loadhero();
  }

   async loadhero() {
    await this.getheroes();
  }

  getheroes() {
    let data: any[];
    this.heroService.getHeroes().subscribe( (data) => {
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
      
      let power = new Hero();

      power.id = propvalues[a].id;
      power.name = propvalues[a].name;
      power.originPlanet  = propvalues[a].originPlanet;
      power.age           = propvalues[a].age;
      power.sex           = propvalues[a].sex;

      if(!datalist) {
        datalist = [power];
      }else{
        datalist.push(power); 
      }
      
      
    }
    return datalist;
  }
}