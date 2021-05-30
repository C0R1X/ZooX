import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { map, take } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public afAuth: AngularFireAuth,public userService:UserService, private router: Router) { }

  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}