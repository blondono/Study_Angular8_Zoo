import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { fadeIn } from '../animation';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    animations: [fadeIn]
})

export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: string;

    constructor(
            private _route: ActivatedRoute, 
            private _router: Router,
            private _userService: UserService
    )
    {
        this.title = 'Login';
        this.user = new User('','','','','','ROLE_USER','');
    }

    ngOnInit() {
        console.log('login.component cargado !!');
        console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());
    }

    public onSubmit() {
        //Lograr el usuario y  conseguir el usuario
        this._userService.singup(this.user).subscribe(
        response => {
            this.identity = response.user;
            
            console.log(response);
            if(!this.identity || !this.identity._id){
                alert("El usuario no se ha logeado correctamente");
            } else {
                this.identity.password = '';
                localStorage.setItem('identity', JSON.stringify(this.identity));

                // conseguir el token
                this._userService.singup(this.user, 'true').subscribe(
                response => {
                    this.token = response.token;

                    if(!this.token){
                        alert("El token no se ha generado");
                    } else {
                        localStorage.setItem('token', this.token);

                        this.status = "success";
                        this._router.navigate(['/']);
                    }
                },error => {
                    console.log(error);
                    this
                });
            }
        },error => {
            var errorMessage= <any>error;
            if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.status = 'error';
            }
        });
    }
}