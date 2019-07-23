//Importación de modulos
import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';

//Importación de módulos
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';

const adminRoutes: Routes = [
    {
        path: 'admin-panel', 
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: ListComponent },
            { path: 'crear', component: AddComponent },
            { path: 'editar', component: EditComponent },
            { path: 'eliminar', component: DeleteComponent }
        ]
    },
    { path: 'listado-admin', component: ListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }