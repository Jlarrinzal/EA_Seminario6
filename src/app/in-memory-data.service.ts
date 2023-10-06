import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Villanos } from './villanos';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', poder: 'fuerza' },
      { id: 13, name: 'Bombasto', poder: 'vuelo' },
      { id: 14, name: 'Celeritas', poder: 'fuerza' },
      { id: 15, name: 'Magneta', poder: 'vuelo' },
      { id: 16, name: 'RubberMan', poder: 'invisibilidad' },
      { id: 17, name: 'Dynama', poder: 'invisibilidad' },
      { id: 18, name: 'Dr. IQ', poder: 'fuerza' },
      { id: 19, name: 'Magma', poder: 'velocidad' },
      { id: 20, name: 'Tornado', poder: 'fuerza' }
    ];
    return {heroes};
  }

  createDb2() {
    const villanos = [
      { id: 12, name: 'Dr. ', poder: 'fuerza' },
      { id: 13, name: 'Bombastic', poder: 'vuelo' },
      { id: 14, name: 'Celeritas', poder: 'fuerza' },
      { id: 15, name: 'Magneta', poder: 'vuelo' },
      { id: 16, name: 'RubberMan', poder: 'invisibilidad' },
      { id: 17, name: 'Dynama', poder: 'invisibilidad' },
      { id: 18, name: 'Dr. IQ', poder: 'fuerza' },
      { id: 19, name: 'Magma', poder: 'velocidad' },
      { id: 20, name: 'Tornado', poder: 'fuerza' }
    ];
    return {villanos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  genId2(villanos: Villanos[]): number {
    return villanos.length > 0 ? Math.max(...villanos.map(villano => villano.id)) + 1 : 11;
  }
}