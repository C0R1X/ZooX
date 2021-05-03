import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {RoomAddComponent} from './components/body/rooms/room-add/room-add.component';
import {RoomsListComponent} from './components/body/rooms/rooms-list/rooms-list.component';
import {RoomDetailComponent} from './components/body/rooms/room-detail/room-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsListComponent },
  { path: 'detail/:id', component: RoomDetailComponent },
  { path: 'add-room', component: RoomAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
