import { Injectable } from '@angular/core';
import { Monster } from '../models/monster.model';
import { MonsterType } from '../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = [];
  currentMonsterIndex: number = 1;

  constructor() {
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

  getAll(): Monster[]{
    return this.monsters.map(monster => monster.copy())
  }

  get(id: number): Monster | undefined{
    const monster = this.monsters.find(monster=> monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  Add(monster: Monster): Monster{

    const monstercopy = monster.copy();
    monstercopy.id = this.currentMonsterIndex ;
    this.monsters.push(monstercopy.copy());

    this.currentMonsterIndex++;

    return monstercopy;
  }

  Update(monster : Monster): Monster{

    const monsterCopy = monster.copy()
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id);
    if(monsterIndex != -1){
      this.monsters[monsterIndex] = monsterCopy.copy();
    }

    return monsterCopy;
  }

  delete(id: number){
    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === id);
    if(monsterIndex != -1){
      this.monsters.splice(monsterIndex, 1);
    }
  }

}
