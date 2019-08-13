import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/animal';
import { GLOBAL } from 'src/app/services/global';


@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  public url: string;

  constructor(
    private _animalService: AnimalService
  ){
    this.title = 'animales';
    this.url = GLOBAL.url;
  }

  getAnimals() {
    this._animalService.all().subscribe(
      response => {
        if(!response.animals) {

        } else {
          this.animals = response.animals;
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
      console.log('Componente animals cargado');
    this.getAnimals();
  }
}