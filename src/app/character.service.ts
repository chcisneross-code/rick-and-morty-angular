import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private api = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) {}

  getCharacters(name: string = "") {

    if(name){
      return this.http.get<any>(`${this.api}?name=${name}`);
    }

    return this.http.get<any>(this.api);
  }

}
