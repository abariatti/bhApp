import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let clusters = [
      {id: 1, name: 'BH Friends', favorite: true, users: [1,2,3,4]},
      {id: 2, name: 'Bariatti family', users: [1,2,3]},
      {id: 3, name: 'Audrey and Arnaud', users: [1,2]},
      {id: 4, name: 'Blablab cluster', users: [5,6]},
      {id: 5, name: 'Roommates', users: [5,6]},
      {id: 6, name: 'BH Friends', users: [5,6]},
      {id: 7, name: 'Bariatti family', users: [5,6]},
      {id: 8, name: 'Audrey and Arnaud', users: [5,6]},
      {id: 9, name: 'Blablab cluster', users: [5,6]},
      {id: 10, name: 'Roommates', users: [5,6]},
      {id: 11, name: 'BH Friends', users: [5,6]},
      {id: 12, name: 'Bariatti family', users: [5,6]},
      {id: 13, name: 'Audrey and Arnaud', users: [5,6]},
      {id: 14, name: 'Blablab cluster', users: [5,6]},
      {id: 15, name: 'Roommates', users: [5,6]},
      {id: 16, name: 'BH Friends', users: [5,6]},
      {id: 17, name: 'Bariatti family', users: [5,6]},
      {id: 18, name: 'Audrey and Arnaud', users: [5,6]},
      {id: 19, name: 'Blablab cluster', users: [5,6]},
      {id: 20, name: 'Roommates', users: [5,6]}
    ];
    return {clusters};
  }
}