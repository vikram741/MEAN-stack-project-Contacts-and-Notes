import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

name:string 
 phn_no :string 
  mail_id:string
  constructor( private UserServ :UserService ) { }

  ngOnInit() {
    console.log('in init of info')
 
     this.UserServ.getUserDetails().subscribe(
       res =>{
        // console.log(res);
         this.name = res.name;
         this.mail_id = res.mail_id;
         this.phn_no = res.phn_no;
       },
       err=>{
         console.log(err);
       }
     )
 
  }

}
