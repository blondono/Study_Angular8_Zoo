import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html'
})
export class MostrarEmailComponent implements OnInit {
  title = 'Mostrar Email';
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