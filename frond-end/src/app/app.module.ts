import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaAdminComponent } from './vista-admin/vista-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { VistaAprovadorComponent } from './vista-aprovador/vista-aprovador.component';
import { VistaDDCComponent } from './vista-ddc/vista-ddc.component';
import { VistaDDIComponent } from './vista-ddi/vista-ddi.component';
import { VistaDDAComponent } from './vista-dda/vista-dda.component';
import { VistaVisualizadorComponent } from './vista-visualizador/vista-visualizador.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaAdminComponent,
    LoginComponent,
    VistaAprovadorComponent,
    VistaDDCComponent,
    VistaDDIComponent,
    VistaDDAComponent,
    VistaVisualizadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
