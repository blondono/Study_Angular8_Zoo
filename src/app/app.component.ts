import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-Zoo';
  public emailContacto: string;
  ngOnInit() {
    this.emailContacto = localStorage.getItem("emailContacto");
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem("emailContacto");
  }

  borrarEmail() {
    localStorage.removeItem("emailContacto");
    this.emailContacto = null;
  }

  borrarLocalStorage() {
    localStorage.clear();
    this.emailContacto = null;
  }
}