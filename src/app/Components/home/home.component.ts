import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a ng-Zoo';

  ngOnInit() {
      console.log('Componente home cargado');
  }
}