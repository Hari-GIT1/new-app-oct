import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creste-user',
  templateUrl: './creste-user.component.html',
  styleUrls: ['./creste-user.component.css']
})
export class CresteUserComponent {

  public userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(65)]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      pin: new FormControl('', [Validators.required, Validators.min(500000), Validators.max(599999)]),
    }),
    type: new FormControl('', [Validators.required]),
    cards: new FormArray([]),
  })


  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }

  addCard() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        expiry: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
        cardname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      })
    )
  }
  deleteCard(i: number) {
    this.cardsFormArray.removeAt(i);
  }

  onClick() {
    console.log(this.userForm.value)
  }
  constructor() {
    this.userForm.get("type")?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayscholar') {
          this.userForm.addControl('busFee', new FormControl());
          this.userForm.removeControl('hostelFee');
        }
        else {
          this.userForm.addControl('hostelFee', new FormControl());
          this.userForm.removeControl('busFee');
        }
      }
    )
  }

}
