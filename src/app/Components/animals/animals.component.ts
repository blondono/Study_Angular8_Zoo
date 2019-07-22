import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
})
export class AnimalsComponent implements OnInit {
  title = 'animales';

  ngOnInit() {
      console.log('Componente animals cargado');
  }
}