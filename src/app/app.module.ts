import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Plugins
import { EditorModule } from '@tinymce/tinymce-angular';

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
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

import { ModuloEmailModule } from './Modules/moduloEmail/module-email.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Servicios
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    ModuloEmailModule,
    AdminModule,
    routing
  ],
  providers: [
    appRoutningProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
