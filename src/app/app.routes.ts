import { Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { AddVehiculoComponent } from './components/add-vehiculo/add-vehiculo.component';
import { ListVehiculoComponent } from './components/list-vehiculo/list-vehiculo.component';

export const ROUTES: Routes = [
    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer', component: EditCustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },
    { path: 'add-vehiculo', component: AddVehiculoComponent },
    { path: 'list-vehiculo', component: ListVehiculoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-vehiculo' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-vehiculo' }
];