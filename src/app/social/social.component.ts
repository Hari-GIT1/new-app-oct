import { Component } from '@angular/core';
import { SocialService } from '../social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  profiles:any =[];
  constructor(private _socialService:SocialService){
    _socialService.getprofile().subscribe(
      (data:any)=>{
        this.profiles =data;   
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  

}
