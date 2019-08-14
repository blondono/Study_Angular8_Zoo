//Importación de modulos
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Importación de módulos
import { GuardarEmailComponent } from './Components/Guardar-Email/guardar-email.component';
import { MostrarEmailComponent } from './Components/Mostrar-Email/mostrar-email.component';
import { MainEmailComponent } from './Components/main-email/main-email.component';

//Decorador ngModule
 @NgModule({
     imports:[
         CommonModule,
         FormsModule
    ],
     declarations:[
         GuardarEmailComponent,
         MostrarEmailComponent,
         MainEmailComponent
     ],
     exports: [MainEmailComponent]
 })

 export class ModuloEmailModule {
 }