import { Component,OnDestroy,OnInit} from '@angular/core';
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'
import { UserService } from './services/user.service'

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'CN';
  constructor(private auth : AuthService , private router : Router, private usrsrv : UserService )
  {}

  ngOnInit()
  {
    this.usrsrv.logout();
  }

  checklogin(){
    if( this.auth.loggedIN() )
  {  
      //this.router.navigate(['/user'])
      return true;  
  }
    else {
        //this.router.navigate(['/']);
        return false;
    }
  }
}
 
