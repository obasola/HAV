import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {
  URL = 'http://localhost:3000';
  GET_REQ = '/locations';
  constructor(private httpClient: HttpClient) { }

  getVillians() {
    let data = this.httpClient.get(this.URL+ this.GET_REQ);
    console.log(data);
    return data;
  }
}
