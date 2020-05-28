import { Component, OnInit } from '@angular/core';
import {UserModel} from './user.model'
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showNotes:boolean;
  showContacts:boolean;
  user = new UserModel;
  constructor( private UserServ : UserService  ) { 
    
    this.showContacts=false;
    this.showNotes=false;
  }

  ngOnInit() {
     this.UserServ.getUser();
  }
  gotonotes()
  {
    this.showContacts=false;
    this.showNotes=true;
  }
  gotocontacts()
  {
    this.showContacts=true;
    this.showNotes=false;
  }
  logout()
  {
      this.UserServ.logout()
  }

}
