import { Component, OnInit, ɵConsole } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from 'src/app/services/global';
import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ){
    this.url = GLOBAL.url;
  }

  ngOnInit(){
      console.log('animal-detail componente cargado');
        this.getAnimal();
    }

  getAnimal(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this._animalService.get(id).subscribe(
            response => {
                if(!response.animal){
                    this._router.navigate(['/home']);
                } else {
                    this.animal = response.animal;
                }
            }, error => {
                console.log(<any>error);
                this._router.navigate(['/home']);
            }
        );
      });
  }
}