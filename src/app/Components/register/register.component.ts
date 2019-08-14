import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    public title: String;
    public user: User;
    public status: string;

    constructor(
            private _route: ActivatedRoute, 
            private_router: Router,
            private _userService: UserService
    )
    {
        this.title = 'Registro';
        this.user = new User('','','','','','','');
    }

    ngOnInit() {
        console.log('register.component cargado !!');
    }

    onSubmit(registerForm) {
        this._userService.register(this.user).subscribe (
            response => {
                if(response.user){
                    this.status = 'success';
                    registerForm.reset();
                } else {
                    this.status = 'error';
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}