import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import { TiendaComponent } from './Components/Tienda/tienda.component';
import { AnimalsComponent } from './Components/animals/animals.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { KeepersComponent } from './Components/keepers/keepers.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { UserEditComponent } from './Components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'cuidadores', component: KeepersComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'mis-datos', component: UserEditComponent},
    { path: 'animal/:id', component: AnimalDetailComponent },
    { path: '**', component: HomeComponent}
];
export const appRoutningProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
