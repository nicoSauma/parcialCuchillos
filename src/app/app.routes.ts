import { Routes } from '@angular/router';
import { CuchilloFormComponent } from './components/cuchillo-form/cuchillo-form.component';
import { CuchilloEditComponent } from './components/cuchillo-edit/cuchillo-edit.component';
import { CuchilloListComponent } from './components/cuchillo-list/cuchillo-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

    {path : "" , component:AppComponent}, 
    {path: "carga", component:CuchilloFormComponent},
    {path:"lista", component:CuchilloListComponent}, 
    {path:"detalle/:id" , component:CuchilloEditComponent}
];
