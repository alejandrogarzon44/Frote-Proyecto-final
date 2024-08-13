import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componente/home/home.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeaderComponent } from './componente/header/header.component';
import { JuguetesComponent } from './componente/juguetes/juguetes.component';
import { BolsosComponent } from './componente/bolsos/bolsos.component';
import { TeterosComponent } from './componente/teteros/teteros.component';
import { SonajerosComponet } from './componente/sonajeros/sonajeros.component';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componente/registro/registro.component';
import { LoginComponent } from './componente/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './componente/menu/menu.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { CategoriasComponent } from './componente/categorias/categorias.component';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { ActivarComponent } from './componente/activar/activar.component';
import { InterceptorService } from './servicios/interceptor.service';
import { MiusuarioComponent } from './componente/miusuario/miusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    JuguetesComponent,
    BolsosComponent,
    TeterosComponent,
    SonajerosComponet,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    ProductosComponent,
    CategoriasComponent,
    UsuariosComponent,
    ActivarComponent,
    MiusuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
