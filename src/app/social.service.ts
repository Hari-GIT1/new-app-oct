import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private _httpClient:HttpClient) { }
  getprofile(){
    return this._httpClient.get("https://dummyapi.online/api/social-profiles")
  }

}
