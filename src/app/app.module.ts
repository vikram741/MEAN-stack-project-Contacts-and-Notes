import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { UserComponent } from './UserAccount/user/user.component';
import { InfoComponent } from './UserAccount/info/info.component';
import { NotesComponent } from './UserAccount/notes/notes.component';
import { ContactsComponent } from './UserAccount/contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import  {AuthGuard} from './services/auth.guard';
import {AuthService} from './services/auth.service';
import {TokenInterceptorService} from './services/token-interceptor.service'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    InfoComponent,
    NotesComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
