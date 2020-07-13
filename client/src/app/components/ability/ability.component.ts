import { Component, OnInit } from '@angular/core';
import { AbilityApiService } from '../../services/ability-api.service';
import { Observable } from 'rxjs';
import { Ability } from 'src/app/models/ability';
import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { defaultMaxListeners } from 'stream';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilities: Ability[{}];
  ability =  new Ability();
  service: AbilityApiService;
   
  constructor(private abilityService: AbilityApiService) { 
    console.log("service = "+abilityService);
    this.service = abilityService;
  }

  ngOnInit() {
    this.loadAbility();
  }

   async loadAbility() {
    await this.getAbilities();
  }

  getAbilities() {
    let data: any[];
    this.abilityService.getAbilities().subscribe( (data) => {
      console.log(data);
      if(data) {
        this.abilities = this.convertObject2Array(data);
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
      
      let power = new Ability();

      power.id = propvalues[a].id;
      power.name = propvalues[a].name;
      power.description = propvalues[a].description;
      if(!datalist) {
        datalist = [power];
      }else{
        datalist.push(power); 
      }
      
      
    }
    return datalist;
  }
}