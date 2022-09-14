import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socialmedia } from './socialmedia';

@Injectable({
  providedIn: 'root'
})
export class SocialmediaService {

  constructor(private _httpclient:HttpClient) {}
  getmedia():Observable<Socialmedia[]>{
    return this._httpclient.get<Socialmedia[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  

    

  
}
