import { Routes } from '@angular/router';
import { AppLayout } from '@/layout/components/app.layout';
import { Notfound } from '@/pages/notfound';

export const appRoutes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./app/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'Bambu-shop',
        component: AppLayout,
        children: [
            {
                path:'',
                loadChildren: () => import('./app/shop/shop.module').then(m => m.ShopModule)
            }
        ]
    },
    { path: '', redirectTo: 'Bambu-shop', pathMatch: 'full' },

    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' },
];
