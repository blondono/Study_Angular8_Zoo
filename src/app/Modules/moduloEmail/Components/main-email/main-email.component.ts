import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './main-email.component.html'
})
export class MainEmailComponent implements OnInit {
  title = 'main Email';

  ngOnInit() {
    console.log("Componente Principal Cargado");
  }
}