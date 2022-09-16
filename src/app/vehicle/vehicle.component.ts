import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public filterTerm:string="";
  public column:string="";
  public order:string="";

  public vehicles: Vehicle[]=[];

  constructor(private _vehicleService:VehicleService,private router:Router ) { 
    this._vehicleService.getVehicles().subscribe(

      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert('internal serve error');
      }
      )
      
    
  }

 

  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getfilteredvehicles(this.filterTerm).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
      
    )
  }
  sort(){
    this._vehicleService.getssortedvehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  page(pageNo:number){
    this._vehicleService.getpagedvehicles(pageNo).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert('internal server error')
      }
    )
  }
  delete(id:string){
    this._vehicleService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  view(id:string){
    this.router.navigateByUrl('/dashboard/vehicle-details'+'/'+id);
    
  }

}
