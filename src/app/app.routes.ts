import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegComponent } from './components/home/reg/reg.component';
import { TableComponent } from './components/home/table/table.component';
import { RegiComponent } from './components/regi/regi.component';

export const routes: Routes = [
  {path: '' , component: LoginComponent} ,
   {path: 'Login' , component: LoginComponent} ,
  {path: 'Tables' , component: TableComponent} ,
  {path: 'Register', component: RegComponent},
  {path: 'dashboard', component: HomeComponent},
  {path: 'regi', component: RegiComponent},
  {path: '**', redirectTo: '/',}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
