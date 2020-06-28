import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-villian',
  templateUrl: './villian.component.html',
  styleUrls: ['./villian.component.css']
})
export class VillianComponent implements OnInit {

  constructor() { 
    console.log('VillianComponent');
  }

  ngOnInit() {
  }

}
