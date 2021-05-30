import {IRoom} from './models/room';
import {IUser} from './models/user';

export const rooms: IRoom[] = [
  {
    Id: 0,
    Name: 'Disco',
    Description: 'Darins\'s birthday in disco style!'
  },
  {
    Id:1,
    Name: 'Yetti party',
    Description: 'There\'s yetti only allowed'
  }
];
export const users: IUser[] = [
  {
    Id: 0,
    Login: 'qwe',
    FirstName: 'Crabby',
    SecondName: 'John',
    Password: '',
    Friends:[]
  }
]
