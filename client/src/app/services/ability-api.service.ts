import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbilityApiService {
  URL = 'http://localhost:3000';
  GET_REQ = '/abilities';
  constructor(private httpClient: HttpClient) { }

  getAbilities() {
    let data = this.httpClient.get(this.URL+ this.GET_REQ);
    console.log(data);
    return data;
  }
}
