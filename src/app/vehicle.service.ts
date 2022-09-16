import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private _httpClient:HttpClient) { }

  getVehicles():Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1');
    
  }
   getVehicle(id:string):Observable<Vehicle>{
    return this._httpClient.get<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id);
    }

  getfilteredvehicles(filterTerm:string):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterTerm
    );
  }
  getpagedvehicles(pageNo:number):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?limit=10&page='+pageNo);

   

  }
  getssortedvehicles(column:string,order:string):Observable<Vehicle[]>{
    return this._httpClient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order
    );
  }
   createVehicle(vehicle:Vehicle):Observable<Vehicle>{

    return this._httpClient.post<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',vehicle
    );

    
   }



  deletevehicle(id:string):Observable<Vehicle>{
    return this._httpClient.delete<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction ' +
        '/' + id);
        
   
  }
}
