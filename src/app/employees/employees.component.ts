import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Employment } from '../employment';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
public name:string='';
public age:number=0;
public company:string='';
public package:number=0;
public employees:Employment[]=[];

  constructor() { }

  ngOnInit(): void {
  }
register(){
  this.employees.push({
    'name':this.name,
    'age':this.age,
    'company':this.company,
    'package':this.package
});

}

packagelowtohigh(){
this.employees=this.employees.sort((a,b)=>a.package-b.package);
}
packagehightolow(){
  this.employees=this.employees.sort((a,b)=>b.package-a.package);
}
deleteall(){
  this.employees=[];
}
delete(i:number)
{
  this.employees.splice(i,1);
}
}
