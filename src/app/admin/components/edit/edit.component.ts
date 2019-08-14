import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Animal } from 'src/app/models/animal';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ){
    this.is_edit = true;
    this.title = 'Editar';
    this.animal = new Animal('', '', '', 2018, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
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

  ngOnInit() {
    this.getAnimal();
    console.log('animal.edit.component ha sido cargado');
  }

  onSubmit() {
    var id = this.animal._id;
    this._animalService.update(this.token, id, this.animal).subscribe(
      response => {
        if(!response.animalUpdated){
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animalUpdated;

          //subir imagen del animal
          if(!this.filesToUpload) {
            this._router.navigate(['/animal', this.animal._id]);
          } else {
            this._uploadService.makeFileRequest(
              this.url + 'animal/uploadFile/' + this.animal._id,
              [],
              this.filesToUpload,
              this.token,
              'image'
          ).then((result: any) => {
              this.animal.image = result.image;
              console.log(this.animal);
              localStorage.setItem('identity', JSON.stringify(this.animal));
              this._router.navigate(['/animal', this.animal._id]);
          });
          }
        }
      }, error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    )
  }

  
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}