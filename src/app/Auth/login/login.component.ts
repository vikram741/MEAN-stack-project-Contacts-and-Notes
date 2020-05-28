import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInfo : {mail_id:string , password:string};
  wrngmail = false;
  wrngpswd = false;
  constructor(private auth : AuthService, private router:Router , private UserServ : UserService) { 
      
  }

  ngOnInit() {
  }
 loginUser(logData :{mail_id:string , password:string})
  {
      this.auth.loginUser(logData).subscribe(
        res => {console.log(res)
          localStorage.setItem('token',res.token)
          localStorage.setItem('mailid',logData.mail_id)
          //console.log('in log comp---' , logData.mail_id)
          this.UserServ.setMailid()
          this.router.navigate(['/user']);

        }  ,
        err=>{
          //console.log(err)
          if(err.error.type == 'Mial Id not found')this.wrngmail = true;
          if(err.error.type == 'Wrong Password'){ this.wrngmail = false; this.wrngpswd=true; }
        }
      )
  }
}
