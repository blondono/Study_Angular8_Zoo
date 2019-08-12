import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent implements OnInit, DoCheck {
  title:string;
  public emailContacto: string;
  public identity;
  public url;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Ng-Zoo';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();

    this.emailContacto = localStorage.getItem("emailContacto");
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.emailContacto = localStorage.getItem("emailContacto");
  }

  borrarEmail() {
    localStorage.removeItem("emailContacto");
    this.emailContacto = null;
  }

  borrarLocalStorage() {
    localStorage.clear();
    this.emailContacto = null;
    this.identity = null;
    this._router.navigate(['/login']);
  }

  logout() {
    this.borrarLocalStorage();
  }
}