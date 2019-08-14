import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Animal } from 'src/app/models/animal';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService]
})
export class ListComponent implements OnInit {
  public title: string;
  public numbers = new Array(10);
  public animals: Animal[];
  public token;
  public busqueda: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService
  ){
    this.title = 'Listado de animales';
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this._animalService.all().subscribe(
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

  delete(id){
    $("#myModal" + id).modal("hide");
    this._animalService.delete(this.token, id).subscribe(
      response => {
        if(!response.animalRemoved){
          alert("Error en el servicio");
        } else {
          this.getAnimals();
        }
      }, error => {

      }
    );
  }

}