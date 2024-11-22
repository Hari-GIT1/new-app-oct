import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class IMDBComponent {
[x: string]: any;
  movies:any=[];
  stars:any=[];
  constructor(private _imdbService:ImdbService){
    _imdbService.getmovies().subscribe(
      (data:any)=>{
        this.movies =data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  getFullStars(rating: number): number {
    return Math.floor(rating); // Returns the integer part of the rating
  }

}
