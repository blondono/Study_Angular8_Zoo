import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//modulos
import { routing, appRoutningProviders} from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { TiendaComponent } from './Components/Tienda/tienda.component';
import { ParquesComponent } from './Components/Parques/parques.component';

import { AnimalsComponent } from './Components/animals/animals.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { KeepersComponent } from './Components/keepers/keepers.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutningProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
