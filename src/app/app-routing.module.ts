import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente/home/home.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeaderComponent } from './componente/header/header.component';
import { JuguetesComponent } from './componente/juguetes/juguetes.component';
import { BolsosComponent } from './componente/bolsos/bolsos.component';
import { TeterosComponent } from './componente/teteros/teteros.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { LoginComponent } from './componente/login/login.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { CategoriasComponent } from './componente/categorias/categorias.component';
import { SonajerosComponet } from './componente/sonajeros/sonajeros.component';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { ActivarComponent } from './componente/activar/activar.component';
import { MiusuarioComponent } from './componente/miusuario/miusuario.component';


const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"footer",component:FooterComponent,pathMatch:"full"},
  {path:"header",component:HeaderComponent,pathMatch:"full"},
  {path:"juguetes",component:JuguetesComponent,pathMatch:"full"},
  {path:"bolsos",component:BolsosComponent,pathMatch:"full"},
  {path:"teteros",component:TeterosComponent,pathMatch:"full"},
  {path:"login",component:LoginComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent,pathMatch:"full"},
  {path:"productos",component:ProductosComponent,pathMatch:"full"},
  {path:"categorias",component:CategoriasComponent,pathMatch:"full"},
  {path:"sonajeros",component:SonajerosComponet,pathMatch:"full"},
  {path:"usuarios",component:UsuariosComponent,pathMatch:"full"},
  {path:"activar/:correo/:codigo",component:ActivarComponent,pathMatch:"full"},
  {path:"miusuario",component:MiusuarioComponent,pathMatch:"full"}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
