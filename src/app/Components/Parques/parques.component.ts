import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { fadeIn } from '../animation';
@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css'],
  animations: [fadeIn]
})
export class ParquesComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

   constructor() {
       this.nombre = 'Parque natural de caballos';
       this.metros = 450;
       this.vegetacion = 'Alta';
       this.abierto = false;
   }

   emitirEvento() {
      this.pasameLosDatos.emit({
          'nombre': this.nombre,
          'metros': this.metros,
          'vegetacion': this.vegetacion,
          'abierto': this.abierto
      });
   }

   ngOnChanges(changes: SimpleChanges) {
      //console.log(changes);
      console.log('Existen cambios en las propiedades');
   }

   ngOnInit() {
     console.log('Evento OnInit lanzado');
   }

   ngDoCheck() {
     console.log("Evento DoCheck se ha lanzado");
   }

   ngOnDestroy() {
     console.log('Elemento destruido');
   }
}
