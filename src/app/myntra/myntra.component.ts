import { Component } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent {
  products:any =[];
  constructor(private _myntraService:MyntraService){
    _myntraService.getproducts().subscribe(
      (data:any)=>{
        this.products = data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
