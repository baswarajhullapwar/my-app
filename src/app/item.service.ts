import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _httpclient:HttpClient) {}

   getItems():Observable<Item[]>{
    return this._httpclient.get<Item[]>('https://fakestoreapi.com/products');


   }

  }

  
  
  



    

   

