import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyntraService {

  constructor( private _httpClint:HttpClient) { }
  getproducts():Observable<any>{
    return this._httpClint.get("https://fakestoreapi.com/products")
  }
}
