import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  //Para bindiear la informacion de padre al hijo
  @Input()
 //fin del bindeo
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

//emitir
@Output()
public onDelete = new EventEmitter<number>();

  onDeleteCharacter(index: number): void {
    //TODO: emitir el ID del personaje
    this.onDelete.emit( index );
  }
}
