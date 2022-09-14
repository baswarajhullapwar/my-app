import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankaccount } from './bankaccount';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor( private _httpClient:HttpClient) { }
  getbankaccount():Observable<Bankaccount[]>{

   return this._httpClient.get<Bankaccount[]>(
     'https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
   
    
  }
}
