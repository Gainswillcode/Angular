
export enum MonsterType {
 PLANT = "Plants",
 ELECTRIC = "Electricity",
 FIRE = "Fire",
 WATER = 'Water'
}

export interface IMonserProperties{
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonserProperties} = {
  [MonsterType.PLANT]: {
    imageUrl: 'img/pokemon-bulbasaur.jpg',
    color: 'rgba(135, 255, 124)'
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: 'img/pokemon-pikachu-neon-i71936.jpg',
    color: 'rgba(255, 255, 12)'
  },
  [MonsterType.FIRE]: {
    imageUrl: 'img/496.png',
    color: 'rgba(242, 103, 85)'
  },
  [MonsterType.WATER]: {
    imageUrl: 'img/turtwig-300x300.png',
    color: 'rgba(0, 140, 255)'
  },

}
