import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'inicio', pathMatch: 'full' },
            {
                path: 'inicio',
                loadComponent: () =>
                    import('../app/pages/home/home.component').then(m => m.PageHomeComponent),
            },
            // otras rutas aquí...
        ],
    },
];
