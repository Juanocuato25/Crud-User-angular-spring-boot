import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'Camilo',
    lastname: 'Arenas',
    email:'juancarenas@hotmail.com',
    username:'juancarenas25',
    password: '1234'

  },
  {
    id: 2,
    name: 'Karen',
    lastname: 'Silva',
    email:'andipkaju@hotmail.com',
    username:'karencita27',
    password: '1234'

  },
  {
    id: 3,
    name: 'Lupe',
    lastname: 'Arenas',
    email:'Lupita@hotmail.com',
    username:'lupita5',
    password: '1234'

  }];

  constructor() { }

  findAll(): Observable<User[]>{
    return of(this.users)//Convierte un obj a un flujo de tipo observable reactivo
  }
}
