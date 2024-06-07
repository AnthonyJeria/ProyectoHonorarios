import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'admin', component: VistaAdminComponent},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
