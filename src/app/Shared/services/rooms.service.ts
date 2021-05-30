import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Room} from '../models/room';
import {rooms} from '../mock';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private rooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>(rooms as Room[]);

  getRooms():Observable<Room[]> {
    return this.rooms$;
  }

  getRoom(id: string): Observable<Room> {
    return this.getRooms().pipe(
      map(rooms => rooms.find(r => r.Id === +id))
    );
  }

  addRoom(name: string, desc: string) {
    const rooms = this.rooms$.getValue();
    const room = new Room(rooms.length, name, desc);
    rooms.push(room);
    this.rooms$.next(rooms);
  }

  deleteRoom(room: Room) {
    let rooms = this.rooms$.getValue();
    rooms = rooms.filter(x => x.Id !== room.Id);
    this.rooms$.next(rooms);
  }

  constructor() {
  } 
}
