import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  title = 'contact';
  public emailContacto: string;

  ngOnInit() {
      console.log('Componente contact cargado');
  }

  guardarEmail() {
    localStorage.setItem("emailContacto", this.emailContacto);
    console.log(localStorage.getItem("emailContacto"));
  }
}