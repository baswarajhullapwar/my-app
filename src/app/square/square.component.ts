import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
 public number1:number=0;
 public result:number=0;
  constructor() { }

  ngOnInit(): void {
  }
    square(){
      this.result=this.number1*this.number1;

    }
    per(){
      this.result=4*this.number1;
    }
}
