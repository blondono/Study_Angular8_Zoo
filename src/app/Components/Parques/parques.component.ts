import { Component } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent {
  public nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;

   constructor() {
       this.nombre = 'Parque natural de caballos';
       this.metros = 450;
       this.vegetacion = 'Alta';
       this.abierto = true;
   }

}
