import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent {
  bankaccounts:any = [];
  term:string ="";
  constructor(private _bankaccoutService:BankaccountService){
    _bankaccoutService.getbankaccount().subscribe(
      (data:any)=>{
        this.bankaccounts = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  delete(id:string){
    this._bankaccoutService.deletebankaccount(id).subscribe(

      (data:any)=>{
        alert("deleted Succesffully")
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  search(){
    this._bankaccoutService.getFilteredBankaccount(this.term).subscribe(
    
      (data:any)=>{
        this.bankaccounts = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    
    )

  }
}
