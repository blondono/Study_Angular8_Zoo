import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
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