import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid'

console.log(uuid())

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[]=[{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

addCharacter( character: Character ):void {

  //toma todas sus propiedades y esparcelas por este nuevo (...)
const newCharacter: Character = { id: uuid(), ...character };

 this.characters.push(character);
  // console.log('MainPage');
  // console.log(character)
}

//recibir, escucha al event emitter
// onDeleteCharacter (index: number){
//   this.characters.splice(index, 1); //remover basado en el indice
//   console.log(index)
//   }
deleteCharacterById(id: string) {
  this.characters = this.characters.filter(
    chacter => chacter.id!= id
    );}
}
