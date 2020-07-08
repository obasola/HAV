import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  route:Router;

  constructor(router: Router) { 
    this.route = router;
  }

  ngOnInit() {
  }

  navigate(url) {
    this.route.navigateByUrl(url);
  }
}
