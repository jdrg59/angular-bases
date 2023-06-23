import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
})
export class HeroesModule { }
