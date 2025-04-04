import { MonsterType } from "../utils/monster.utils";

export class Monster{
  id : number = 1;
  name: string = 'My Monster';
  image: string = "img/496.png";
  type: MonsterType = MonsterType.FIRE;
  hp : number = 40;
  figureCaption: string = "N°001 Monster";
  attackName: string = "Geo Impact";
  attackStrength: number = 60;
  attackDescription: string = " this is a long description  of a monster capacities. Probably something to do with electricity. ";


  copy():Monster{
    return Object.assign(new Monster(), this);
  }
}
