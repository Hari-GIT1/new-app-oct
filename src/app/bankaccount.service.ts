import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  constructor(private _httpClient:HttpClient) { }
  getbankaccount():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  getFilteredBankaccount(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term)
  }


  createbankaccount(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }
  deletebankaccount(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }
}
