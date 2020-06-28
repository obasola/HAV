import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillianApiService {
  
  URL = 'http://localhost:3000';
  GET_REQ = '/villians';
  constructor(private httpClient: HttpClient) { }

  getVillians() {
    let data = this.httpClient.get(this.URL+ this.GET_REQ);
    console.log(data);
    return data;
  }
}
