import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    public title: String;
    public user: User;

    constructor(
            private _route: ActivatedRoute, 
            private_router: Router
    )
    {
        this.title = 'Registro';
        this.user = new User('','','','','','');
    }

    ngOnInit() {
        console.log('register.component cargado !!');
    }

    onSubmit( ) {
        console.log(this.user);
    }
}