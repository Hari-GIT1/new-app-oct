import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creste-user',
  templateUrl: './creste-user.component.html',
  styleUrls: ['./creste-user.component.css']
})
export class CresteUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    dob: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl(),
    }),
    type: new FormControl(),
    cards: new FormArray([]),
  })

  
  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
  }

  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl(),
        cardname:new FormControl(),
      })
    )
  }

  del(){
    
  }

  onClick() {
    console.log(this.userForm.value)
  }
  constructor(){
    this.userForm.get("type")?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busFee',new FormControl());
          this.userForm.removeControl('hostelFee');

        }
        else{
          this.userForm.addControl('hostelFee',new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

}
