import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
public name:string='';
public names:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }
register(){
  this.names.push(this.name);


}
delete(){
this.names.pop();
}
deleteall(){
  this.names=[];
}
deleteach(i:number){
  this.names.splice(i,1);
}
reverse(){
  this.names.reverse()
}
}
