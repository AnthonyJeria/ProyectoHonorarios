import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { LoginComponent } from './login/login.component';
import { VistaAprovadorComponent } from './vista-aprovador/vista-aprovador.component';
import { VistaDDAComponent } from './vista-dda/vista-dda.component';
import { VistaDDCComponent } from './vista-ddc/vista-ddc.component';
import { VistaDDIComponent } from './vista-ddi/vista-ddi.component';
import { VistaVisualizadorComponent } from './vista-visualizador/vista-visualizador.component';


const routes: Routes = [
  {path: 'admin', component: VistaAdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aprovador', component: VistaAprovadorComponent},
  {path: 'DDA', component: VistaDDAComponent},
  {path: 'DDC', component: VistaDDCComponent},
  {path: 'DDI', component: VistaDDIComponent},
  {path: 'visualizador', component: VistaVisualizadorComponent},
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
