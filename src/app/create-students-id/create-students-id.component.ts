import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-create-students-id',
  templateUrl: './create-students-id.component.html',
  styleUrls: ['./create-students-id.component.css']
})
export class CreateStudentsIDComponent {
  constructor(private _studentsService:StudentsService){}
  public StudentForm:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      phone:  new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      profile_picture:new FormControl(), 
      email:new FormControl(),
      school_logo:new FormControl(),
      school_name:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl(),
    }
  )
  create(){
    console.log(this.StudentForm)
    this._studentsService.createstudents(this.StudentForm.value).subscribe(
      (data:any)=>{
        alert("Created Successfully")
      },
      (err:any)=>{
        alert("INTERNAAL SERVER ERROR")
      }
    )
  }

}
