import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { UserComponent } from './UserAccount/user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard'


const routes: Routes = [
  {path : ''  ,component: HomeComponent },
  {path : 'login' , component :LoginComponent },
  {path : 'register', component :RegisterComponent },
  {path : 'user' , component :UserComponent , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
