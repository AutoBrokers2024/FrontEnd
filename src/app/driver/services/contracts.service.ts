import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PendingContract} from "../../models/contracts/pending";
import {OfferContract} from "../../models/contracts/offer";
import {BACKEND_URL} from "../../../config";
@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private http: HttpClient) {}

  // Contracts Endpoint
  url: string = BACKEND_URL;

  getOfferContractsClient(driverId: number) {
    return this.http.get(
      `${this.url}/offerContracts?driverId=${driverId}&_expand=client&status=waiting`
    );
  }
  getOfferContractById(id: number) {
    return this.http.get<OfferContract>(`${this.url}/offerContracts/${id}`);
  }
  updateOfferContract(id: number, offerContract: OfferContract) {
    return this.http.put<OfferContract>(
      `${this.url}/offerContracts/${id}`,
      offerContract
    );
  }
  removeOfferContract(id: number) {
    return this.http.delete(`${this.url}/offerContracts/${id}`);
  }

  getHistoryContractsClient(driverId: number) {
    return this.http.get(
      `${this.url}/historyContracts?driverId=${driverId}&_expand=client`
    );
  }

  getPendingContractsClient(driverId: number) {
    return this.http.get(
      `${this.url}/pendingContracts?driverId=${driverId}&_expand=client`
    );
  }
  getPendingContracts(driverId: number) {
    return this.http.get(`${this.url}/pendingContracts?driverId=${driverId}`);
  }
  getPendingContractById(id: number) {
    return this.http.get<PendingContract>(`${this.url}/pendingContracts/${id}`);
  }
  updatePendingContract(id: number, pendingContract: PendingContract) {
    return this.http.put<PendingContract>(
      `${this.url}/pendingContracts/${id}`,
      pendingContract
    );
  }
  addPendingContract(pendingContract: PendingContract) {
    return this.http.post<PendingContract>(
      `${this.url}/pendingContracts`,
      pendingContract
    );
  }
}
