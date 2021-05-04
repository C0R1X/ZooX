import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Room} from '../../models/room';
import {RoomsService} from '../../services/rooms.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

  roomsList$=this.roomService.getRooms();
  filteredRooms$: Observable<Room[]>;

  constructor(private roomService: RoomsService) { }
}
