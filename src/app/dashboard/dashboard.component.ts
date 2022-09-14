import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  constructor(private router:Router) { }
  

  ngOnInit(): void {

   

    }
    logout(){
      sessionStorage.removeItem('my-app-token');
      this.router.navigateByUrl('/login');


    }
  }


