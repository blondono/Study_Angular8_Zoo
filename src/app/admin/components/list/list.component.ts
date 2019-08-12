import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Animal } from 'src/app/models/animal';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]
})
export class ListComponent implements OnInit {
  public title: string;
  public numbers = new Array(10);
  public animals: Animal[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService
  ){
    this.title = 'Listado de animales';
  }

  ngOnInit() {
    this._animalService.All().subscribe(
      response => {
        if(!response.animals){

        } else {
          this.animals = response.animals;
        }
        
      }, error => {
        console.log(<any>error);
      }
    );
  }

}