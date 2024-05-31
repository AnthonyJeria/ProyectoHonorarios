import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VistaAdminComponent } from './components/vista-admin/vista-admin.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: VistaAdminComponent},
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
      },
];
