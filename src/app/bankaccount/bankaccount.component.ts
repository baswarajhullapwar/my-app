import { Component, OnInit } from '@angular/core';
import { Bankaccount } from '../bankaccount';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent implements OnInit {

  public bankaccounts:Bankaccount[]=[];

  constructor(private _bankaccountservice:BankaccountService) { 
    this._bankaccountservice.getbankaccount().subscribe(
      (data:any)=>{
        this.bankaccounts=data;
      },
      (err:any)=>{
        alert("internal server error")
      }

    )

  }

  ngOnInit(): void {
  }

}
