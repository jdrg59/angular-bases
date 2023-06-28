import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'

})

export class MainPageComponent{

  constructor(private dbzService: DbzService){}

  //crear getes y set por servicio privado
  get character(): Character[] {
    //... para no modificar la data del servicio
    return [...this.dbzService.characters];
  }

  //que hacer cuando se elimine personaje
  onDeleteCharacter( id: string ): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character):void{
    this.dbzService.addCharacter(character)
  }
}
