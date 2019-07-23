import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
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

}
