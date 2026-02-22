import { Routes } from '@angular/router';
import { ProductoLista } from './components/producto-lista/producto-lista';
import { AgregarProducto } from './components/agregar-producto/agregar-producto';
import { EditarProducto } from './components/editar-producto/editar-producto';

//http://localhost:4200/api/productos
export const routes: Routes = [
    { path: 'productos', component: ProductoLista },
    { path: '', redirectTo: 'productos', pathMatch: 'full' },
    // Esto sirve para redireccionar a la ruta 'productos' cuando se accede a la raíz del sitio
    { path: 'agregar-producto', component: AgregarProducto },
    { path: 'editar-producto/:id', component: EditarProducto }
];
