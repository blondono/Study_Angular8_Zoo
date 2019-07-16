import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  public titulo: string;
  public nombreDelParque: string;
  public objParque;

   constructor() {
       this.titulo = 'Este es el título';
   }

   mostrarNombre() {
     console.log(this.nombreDelParque);
   }

   verDatosParque(event) {
     console.log(event);
     this.objParque = event;
   }

}
