import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Componentes
import { TiendaComponent } from './Components/Tienda/tienda.component';
import { AnimalsComponent } from './Components/animals/animals.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { KeepersComponent } from './Components/keepers/keepers.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'animales', component: AnimalsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'cuidadores', component: KeepersComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: '**', component: HomeComponent}
];
export const appRoutningProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
