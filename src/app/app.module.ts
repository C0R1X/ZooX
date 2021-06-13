import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './Shared/components/header/header.component';
import {FooterComponent} from './Shared/components/footer/footer.component';
import {RoomComponent} from './Shared/components/room/room.component';
import { MainComponent } from './Shared/components/main/main.component';
import { RoomDetailsComponent } from './Shared/components/room-details/room-details.component';
import { LoginComponent } from './Shared/components/login/login.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LayoutModule } from '@angular/cdk/layout';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import {MatIcon, MatIconModule} from '@angular/material/icon'
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar'


import {AppRoutingModule} from './app-router';

import {environment} from '../environments/environment';

import {AuthService} from './Shared/services/auth.service';
import { AuthGuard } from './Shared/services/auth-guard.service';
import { RegisterComponent } from './Shared/components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoomComponent,
    MainComponent,
    RoomDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
