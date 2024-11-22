import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any = [];
  term:string ="";
  constructor(private _studentsService:StudentsService){
    _studentsService.getStudents().subscribe(
      (data:any)=>{
        this.students =data;
      },
      (err:any)=>{
        alert("INTERNAL SERVER ERROR");
      }
    )
  }
  search(){
    this._studentsService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students =data;
      },
      (err:any)=>{
        alert("INTERNAL SERVER ERROR");
      }
    )
  }
  delete(id:string){
    this._studentsService.deleteStudents(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully")
        location.reload()
      },
      (err:any)=>{
        alert("INTERNAL SERVER ERROR")
      }

    )
  }
  
}
