import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { Animal } from 'src/app/models/animal';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class AddComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ){
    this.title = 'Adicionar';
    this.animal = new Animal('', '', '', 2018, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animal.add.component ha sido cargado');
  }

  onSubmit() {
    console.log(this.animal);

    this._animalService.add(this.token, this.animal).subscribe(
      response => {
        if(!response.animal){
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          //subir imagen del animal
          if(!this.filesToUpload)
            this._router.navigate(['/admin-panel/listado']);
          else {
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
              console.log(this.animal);
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