import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  getStudents(): Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }
  deleteStudents(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
  }
  createstudents(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data)
  }

}
