import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-task',
  templateUrl: './validation-task.component.html',
  styleUrls: ['./validation-task.component.css']
})
export class ValidationTaskComponent {
  public userForm: FormGroup = new FormGroup({

    name: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    class: new FormControl(),
    fatherName: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    Address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
    }),
    type: new FormControl(),
    cards:new FormArray([]),
  })

  get cardsFormArray(){
    return this.userForm.get('cards') as FormArray
  }

  addMarks(){
    this.cardsFormArray.push(
      new FormGroup({
        classId:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),
      })
    )
  }

  del(i:number){
    this.cardsFormArray.removeAt(i)

  }

  onClick() {
    console.log(this.userForm.value)
  }
  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayScholar') {
          this.userForm.addControl('BusFee', new FormControl()),
            this.userForm.removeControl('hostelFee')
        }
        else {
          this.userForm.addControl('hostelFee', new FormControl()),
            this.userForm.removeControl('busFee')
        }
      }
    )
  }


}
