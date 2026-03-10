import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalogo/catalog';
import { CarritoComponent } from './components/carrito/carrito';

export const routes: Routes = [
    {
        path: '',
        component: CatalogComponent
    },
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: '**', 
        redirectTo: ''
    }
];
