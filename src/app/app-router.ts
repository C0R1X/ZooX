import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//import {RoomAddComponent} from './Shared/components/body/rooms/room-add/room-add.component';
import {RoomDetailsComponent} from './Shared/components/room-details/room-details.component';
import {MainComponent} from './Shared/components/main/main.component';
import {RoomComponent} from './Shared/components/room/room.component';
import { LoginComponent } from './Shared/components/login/login.component';
import { RegisterComponent } from './Shared/components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path:'main',component:MainComponent},
  { path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: 'rooms', component: RoomComponent}, //, children: [
      {path: 'rooms/:id', component: RoomDetailsComponent}
  //  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
