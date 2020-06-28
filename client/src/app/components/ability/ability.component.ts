import { Component, OnInit } from '@angular/core';
import { AbilityApiService } from '../../services/ability-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})
export class AbilityComponent implements OnInit {
  abilities: Observable<Object>[];
  constructor(private abilityService: AbilityApiService) { }

  ngOnInit() {
    this.loadAbility();
  }

   async loadAbility() {
    await this.getAbilities();
  }

  getAbilities() {
    this.abilityService.getAbilities().subscribe( (data) => {
      console.log(data);
      this.abilities = data['abilities'];
    });
  }
}
