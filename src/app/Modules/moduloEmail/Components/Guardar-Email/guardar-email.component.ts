import { Component } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html'
})
export class GuardarEmailComponent {
  title = 'Guardar Email';
  public emailContacto: string;
  
  guardarEmail() {
    localStorage.setItem("emailContacto", this.emailContacto);
    console.log(localStorage.getItem("emailContacto"));
  }
}