import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
    public url: string;
    
    constructor(
        private _http: Http
    ){
        this.url = GLOBAL.url;
    }

    register(user_to_register) {
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'user/register', params, { headers: headers })
        .pipe(map(res => res.json()));
    }

    singup(user_to_login, gettoken = null){
        let json = JSON.stringify(user_to_login);
        
    }
}