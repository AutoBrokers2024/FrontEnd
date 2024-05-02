import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BACKEND_URL} from "../../../config";

@Injectable({
  providedIn: 'root'
})
export class ClientSService {

  constructor(private http: HttpClient) { }

  url : string = BACKEND_URL;

  addOffer(offer:any) {
    return this.http.post(`${this.url}/offerContracts`, offer);
  }

}
