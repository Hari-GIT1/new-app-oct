import { Component } from '@angular/core';
import { BankaccountService } from '../bankaccount.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-bank',
  templateUrl: './create-bank.component.html',
  styleUrls: ['./create-bank.component.css']
})
export class CreateBankComponent {
  constructor(private _bankAccountService:BankaccountService){}

  public bankAccountGroup:FormGroup = new FormGroup(
    {
      account_name:new FormControl(),
      available_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl(),
    }
  )
  submit(){
    console.log(this.bankAccountGroup.value)
    this._bankAccountService.createbankaccount(this.bankAccountGroup.value).subscribe(
      (data:any)=>{
        alert("created Successfully")
      },
      (err:any)=>{
        alert("Creation failed")
      }
    )
  }

}
