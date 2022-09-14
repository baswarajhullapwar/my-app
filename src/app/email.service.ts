import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from './email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _httpclient:HttpClient) { }
  getmails():Observable<Email[]>{
    return this._httpclient.get<Email[]>('https://jsonplaceholder.typicode.com/todos')
  }
}
