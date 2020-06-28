import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  URL = 'http://localhost:3000';
  GET_REQ = '/heroes';
  constructor(private httpClient: HttpClient) { }

  getHeroes() {
    let data = this.httpClient.get(this.URL+ this.GET_REQ);
    console.log(data);
    return data;
  }
}
