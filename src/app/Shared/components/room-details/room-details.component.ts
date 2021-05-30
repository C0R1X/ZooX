import { Component, OnInit } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {Room} from '../../models/room';
import {RoomsService} from '../../services/rooms.service';
import {RoomDetailService} from '../../services/room-detail.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  room$:Observable<Room> = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.roomService.getRoom(params.get('id')))
    );

  style$:Observable<string[]> = this.room$.pipe(map(x=>x.PartyStyle));
  food$:Observable<string[]> = this.room$.pipe(map(x=>x.PartyFood));
  music$:Observable<string[]> = this.room$.pipe(map(x=>x.PartyMusic));

  constructor(
    private route: ActivatedRoute,
    private roomService:RoomsService,
  ) { }

  ngOnInit(): void {
    
  }

}
