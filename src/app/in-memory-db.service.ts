import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDbService {

  constructor() { }

  createDb() {
    const movies = [
      { id: 11, name: 'Minority Report'},
      { id: 12, name: 'La Haine' },
      { id: 13, name: 'The Godfather' },
      { id: 14, name: 'The Man Bites Dog' },
      { id: 15, name: 'Star Wars' },
      { id: 16, name: 'Star Treck' },
      { id: 17, name: 'Arrivals' },
      { id: 18, name: 'Interstellar' }
    ];
    return {movies};
  }
}
