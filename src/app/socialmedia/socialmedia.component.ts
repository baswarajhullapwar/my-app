import { Component, OnInit } from '@angular/core';
import { Socialmedia } from '../socialmedia';
import { SocialmediaService } from '../socialmedia.service';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {
  public socialmedias:Socialmedia[]=[];

  constructor(private _socialmediaService:SocialmediaService) { 
  this._socialmediaService.getmedia().subscribe(
    (data:any)=>{
      this.socialmedias=data;
    },
    (err:any)=>{
      alert('internal server error')
    }


  )
  }


  ngOnInit(): void {
  }

}
