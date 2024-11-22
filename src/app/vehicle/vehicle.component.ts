import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles: any = [];
  term: string = "";
  column:string = "";
  order:string = "";
  page:number = 0;
  limit:number  = 0;

    constructor(private _vehicleServices: VehicleService) {
    _vehicleServices.getVehicle().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  filter() {
    this._vehicleServices.getFilteredVehicle(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  sort(){
    this._vehicleServices.getSortedVehicle(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
  delete(id:string){
    this._vehicleServices.deleteVehicle((id)).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  pagination(){
    this._vehicleServices.getPagedVehicle(this.page,this.limit).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert("Internal Server Error");
      }
    )
  }
}
