import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../models/room';
import {RoomsService} from '../../services/rooms.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit{

  roomsList$=this.roomService.getRooms();


  constructor(
    private router: Router,
    private roomService: RoomsService
  ) { }

  ngOnInit() {

  }

}
