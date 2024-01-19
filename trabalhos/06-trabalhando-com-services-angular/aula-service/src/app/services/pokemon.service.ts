import { PokemonData } from './../models/pokemonData';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private URL: string = ""
  private pokeData: PokemonData | any
  
  constructor(private http: HttpClient) {
    this.URL = environment.pokeApi
  }

  getPokemon(pokemonName: string):Observable<PokemonData>{
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.URL}${pokemonName}`)
    
    return this.pokeData
  }
}
