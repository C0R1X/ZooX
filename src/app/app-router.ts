import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import {TodosAddingComponent} from './components/todos-adding/todos-adding.component';
import {RoomsListComponent} from './components/body/rooms/rooms-list/rooms-list.component';
import {RoomDetailComponent} from './components/body/rooms/room-detail/room-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'rooms', component: RoomsListComponent },
  { path: 'detail/:id', component: RoomDetailComponent },
  { path: 'add-room', component: TodosAddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
