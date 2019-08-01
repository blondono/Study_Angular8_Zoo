import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
  title = 'animales';

  ngOnInit() {
      console.log('Componente animals cargado');
  }
}