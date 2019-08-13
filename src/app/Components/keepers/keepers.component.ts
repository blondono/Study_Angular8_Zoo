import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { GLOBAL } from 'src/app/services/global';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [fadeIn],
  providers: [UserService]
})
export class KeepersComponent implements OnInit {
  public title: string;
  public url: string;
  public keepers: User[];
  constructor(
    private _userService: UserService
  ){
    this.url = GLOBAL.url;
    this.title = 'cuidadores';
  }

  ngOnInit() {
      console.log('Componente keepers cargado');
      this.getKeepers();
    }
  getKeepers() {
    this._userService.keepers().subscribe(
      response => {
        if(!response.keepers) {

        } else {
          this.keepers = response.keepers;
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }
}