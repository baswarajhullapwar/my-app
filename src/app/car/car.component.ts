import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public car:string='';
  public message:string='';
  constructor(private _carService: CarService) 
  {
    this.message=this._carService.message;
  }

  ngOnInit(): void {
  }

}
