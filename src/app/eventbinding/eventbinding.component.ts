import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit() {
    alert("submit clicked")
  }
  test() {
    alert("key up")
  }
  test2(){
    alert("key down")
  }
  test3(){
    alert("keypress")
  }
  test4(){
    alert("mouseenter")
  }
  test5(){
    alert("mouseleave")
  }
  test6(){
    alert("double click")
  }

}
