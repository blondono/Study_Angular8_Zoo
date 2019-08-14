//Importación de modulos
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpModule } from '@angular/http';

//Importación de módulos
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


// Guards y Servicios
import { UserService } from '../services/user.service';
import { AdminGuard } from '../services/admin.guard';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
    declarations: [
        MainComponent,
        EditComponent,
        AddComponent,
        DeleteComponent,
        ListComponent,
        SearchPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        AdminRoutingModule
    ],
    exports: [
        MainComponent,
        EditComponent,
        AddComponent,
        DeleteComponent,
        ListComponent
    ],
    providers: [UserService, AdminGuard]
})

export class AdminModule { }