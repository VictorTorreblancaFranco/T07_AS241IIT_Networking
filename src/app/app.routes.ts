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
            {
                path: 'about',
                loadComponent: () =>
                    import('../app/pages/about/about.component').then(m => m.AboutComponent),
            },
            {
                path: 'service',
                loadComponent: () =>
                    import('../app/pages/service/service.component').then(m => m.ServiceComponent),
            },
            {
                path: 'destinations',
                loadComponent: () =>
                    import('../app/pages/destinations/destinations.component').then(m => m.DestinationsComponent),
            },
            // otras rutas si las tienes
        ],
    },
];
