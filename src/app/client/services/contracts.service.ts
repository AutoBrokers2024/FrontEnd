import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PendingContract} from "../../models/contracts/pending";
import {BACKEND_URL} from "../../../config";
@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  constructor(private http: HttpClient) {}

  // Contracts Endpoint
  url: string = BACKEND_URL;

  getHistoryContractsDriver(clientId: number) {
    return this.http.get(
      `${this.url}/historyContracts?clientId=${clientId}&_expand=driver`
    );
  }
  getPendingContractsDriver(clientId: number) {
    return this.http.get(
      `${this.url}/pendingContracts?clientId=${clientId}&_expand=driver&status=waiting`
    );
  }
  getPendingContracts(clientId: number) {
    return this.http.get(`${this.url}/pendingContracts?clientId=${clientId}`);
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
}
