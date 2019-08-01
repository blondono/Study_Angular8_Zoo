import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from '../animation';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [fadeIn,
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('1s linear')),
      transition('active => inactive', animate('1s linear'))
    ])
  ]
})
export class TiendaComponent implements OnInit {
  public titulo: string;
  public nombreDelParque: string;
  public objParque;
  public status: string;

   constructor() {
       this.titulo = 'Este es el título';
       this.status  = 'inactive';
   }

   mostrarNombre() {
     console.log(this.nombreDelParque);
   }

   verDatosParque(event) {
     console.log(event);
     this.objParque = event;
   }

   //Se recomienda utilizar jquery solo para bootstrap
   ngOnInit() {
    $('#textoJQ').hide();
     $('#botonJQ').click(function() {
        console.log("JQuery activado");
        $('#textoJQ').slideToggle();
     });

     $('#dvCaja').dotdotdot({});
   }

   textoRichEditor(content) {
      console.log(content.editor.getContent());
   }

   cambiarEstado(status) {
     if(status == 'active')
     this.status = 'inactive'
     else this.status = 'active';
   }
}
