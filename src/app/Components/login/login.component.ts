import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    public title: String;
    public user: User;

    constructor(
            private _route: ActivatedRoute, 
            private_router: Router
    )
    {
        this.title = 'Login';
        this.user = new User('','','','','','','');
    }

    ngOnInit() {
        console.log('login.component cargado !!');
    }

    public onSubmit() {
        console.log(this.user);
    }
}