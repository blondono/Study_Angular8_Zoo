import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html',
    providers: [UserService, UploadService]
})

export class UserEditComponent implements OnInit {
    public title: string;
    public user: User;
    public identity;
    public token;
    public status;
    public url;

    constructor(
        private _userService: UserService,
        private _uploadService: UploadService
    ) {
        this.title = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        console.log('Se ha cargado el componente user-edit');
    }

    onSubmit() {
        
        this._userService.updateUser(this.user).subscribe(
            response => {
                if(!response.userUpdated)
                    this.status = 'error';
                else {
                    this.status = 'success';
                    localStorage.setItem('identity', JSON.stringify(response.userUpdated));
                    this.user = response.userUpdated;
                    //subir imagen
                    this._uploadService.makeFileRequest(
                        this.url + 'user/uploadFile/' + this.user._id,
                        [],
                        this.filesToUpload,
                        this.token,
                        'image'
                    ).then((result: any) => {
                        this.user.image = result.image;
                        localStorage.setItem('identity', JSON.stringify(this.user));
                        console.log(this.user);
                    });
                }
            }, error => {
                var errorMessage = <any>error;
                if(errorMessage != null){
                    console.log(errorMessage);
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