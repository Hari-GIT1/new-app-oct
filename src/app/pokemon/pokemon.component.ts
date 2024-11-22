import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbSingleSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel/carousel';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
onSignleSlideEvent($event: NgbSingleSlideEvent) {
throw new Error('Method not implemented.');
}
onSlideEvent($event: NgbSlideEvent) {
throw new Error('Method not implemented.');
}
  pokemons:any =[];
  constructor(private _pokemonService:PokemonService){
    _pokemonService.getpokemon().subscribe(
      (data:any)=>{
        this.pokemons =data
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
