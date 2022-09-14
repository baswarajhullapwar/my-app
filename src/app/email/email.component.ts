import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public emails:Email[]=[];

  constructor(private _emailService:EmailService) { 
    this._emailService.getmails().subscribe(
      (data:any)=>{

        this.emails=data;
      },
      (err:any)=>{
        alert("internal serve error")
      }
    )
  }

  ngOnInit(): void {
  }

}
