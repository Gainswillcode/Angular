import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Component, computed, effect, model, signal } from '@angular/core';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PlayingCardComponent, SearchBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


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
    this.monsters = [];

   const monster1 = new Monster();
    monster1.name = "pikachu";
    monster1.image = "img/pokemon-pikachu-neon-i71936.jpg";
    monster1.type = MonsterType.ELECTRIC;
    monster1.hp = 65;
    monster1.figureCaption = "N° 001 Monster";
    monster1.attackName = "Pik thunder"
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = "Bulbasaur";
    monster2.image = "img/pokemon-bulbasaur.jpg";
    monster2.type = MonsterType.PLANT;
    monster2.hp = 50;
    monster2.figureCaption ="N° 002 Monster";
    monster2.attackName ="discovery";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = "Bulbasaur";
    monster3.image = "img/496.png";
    monster3.type = MonsterType.FIRE;
    monster3.hp = 50;
    monster3.figureCaption ="N° 003 Monster";
    monster3.attackName ="Bulbasaur-kaho";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = "turtwig";
    monster4.image = "img/turtwig-300x300.png";
    monster4.type = MonsterType.WATER;
    monster4.hp = 50;
    monster4.figureCaption ="N° 004 Monster";
    monster4.attackName ="turtwig";
    this.monsters.push(monster4);

  }

  // increaseCount(){
  //   this.count++;
  // }

  // toggleMonters(){
  //   this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1 ) % this.monsters.length);
  // }
}
