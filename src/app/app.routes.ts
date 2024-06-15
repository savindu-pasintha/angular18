import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'home',
        title: 'App Home Page',
        component: HomeComponent,
    },
];
