import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PlayingCardComponent, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  monsterService = inject(MonsterService);

  monsters! : Monster[];
  // count : number = 0;
  search=model('');
  // selectedMonsterIndex = signal(0);
  // selectedMonster = computed(()=>{
  //   return this.monsters[this.selectedMonsterIndex()];
  // })


  filtersMonster =  computed(()=>{
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  })

  constructor(){
    // effect(()=>{
    //   console.log(this.selectedMonster());
    // })

    //gatAll monsters
    this.monsters = this.monsterService.getAll();
  }

  // increaseCount(){
  //   this.count++;
  // }

  // toggleMonters(){
  //   this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1 ) % this.monsters.length);
  // }
}
