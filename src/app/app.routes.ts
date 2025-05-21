import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            // Ruta temporal con componente dummy para evitar errores
            {
                path: 'inicio',
                loadComponent: () => import('./shared/layout/placeholder/placeholder.component').then(m => m.PlaceholderComponent)
            },
        ],
    },
];
