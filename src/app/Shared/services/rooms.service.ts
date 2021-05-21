import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Room} from '../models/room';
import {rooms} from '../mock';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private rooms$: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>(rooms as Room[]);

  getRooms() {
    return this.rooms$;
  }

  addRoom(name: string, desc: string) {
    const rooms = this.rooms$.getValue();
    const room = new Room(name, desc);
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
