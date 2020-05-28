import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private regUrl="register";
  private loginUrl = "login"

  constructor(private http : HttpClient , private UsrSrv:UserService) { }

  registerUser(user){
  //  console.log('in service--',user)
  return this.http.post<any>(this.regUrl , user);
  }

  loginUser(user)
  {
   // console.log('in service--',user)
    return this.http.post<any>(this.loginUrl, user);
  }
  loggedIN()
  {
    //console.log('loginnn')
    //console.log( localStorage.getItem('token') )
    this.UsrSrv.setMailid();
    return ( !!localStorage.getItem('token') && !!localStorage.getItem('mailid')  );
   }
  getToken()
  {
    return localStorage.getItem('tokrn');
  }

}
