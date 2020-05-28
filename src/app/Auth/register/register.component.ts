import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import {Router} from '@angular/router'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mailTaken = false;
  phntaken =false;
  constructor(private auth : AuthService,private router :Router , private UsrSrv : UserService) {
    
   }
  ngOnInit() {
  }
  regUser(regdata :{name:string,mail_id:string,password:string,phn_no:string} )
  {
    console.log('in component--',regdata)
        this.auth.registerUser(regdata)
        .subscribe(
          res => { //console.log(res)
            localStorage.setItem('token',res.token)
            localStorage.setItem('mailid',regdata.mail_id)
            this.UsrSrv.setMailid()
            this.router.navigate(['/user']);
          }  ,
          err => {
            if(err.error.type=='Mail Id already taken')this.mailTaken=true;
            else if(err.error.type='Phone number already used'){
              this.mailTaken=false;
              this.phntaken = true;
            }
          }
        )
  }
  

}
