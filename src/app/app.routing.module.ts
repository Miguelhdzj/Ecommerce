import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './Home/Home.component'
import { AltaProductoComponent } from './AltaProducto/AltaProducto.component';
import { ComprasComponent } from './Compras/Compras.component'

const appRoutes: Routes = [
    {path: 'Home',          component: HomeComponent},
    {path: 'AltaProducto',  component: AltaProductoComponent},
    {path: 'Compras',       component: ComprasComponent },
    {path: '**',            component:HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
