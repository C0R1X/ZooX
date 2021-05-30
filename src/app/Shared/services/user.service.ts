import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {users} from '../mock';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(users as User[]);

  getUsers() {
    return this.users$;
  }

  getUser(id: string): Observable<User> {
    return this.getUsers().pipe(
      map(users => users.find(r => r.Id === +id))
    );
  }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  addUser(login: string, password: string) {
    const users = this.users$.getValue();
    const user = new User(users.length, login, password);
    users.push(user);
    this.users$.next(users);
  }

  deleteUser(user: User) {
    let users = this.users$.getValue();
    users = users.filter(x => x.Id !== user.Id);
    this.users$.next(users);
  }

  constructor() {
  }
}
