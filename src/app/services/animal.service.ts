import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService {
    public url: string;

    
    constructor(
        private _http: Http
    ){
        this.url = GLOBAL.url;
    }

    add(token, animal){
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'animal/register', params, {headers: headers})
        .pipe(map(res => res.json()));
    }

    All(){
        return this._http.get(this.url + 'animal/getAll')
        .pipe(map(res => res.json()));
    }
}