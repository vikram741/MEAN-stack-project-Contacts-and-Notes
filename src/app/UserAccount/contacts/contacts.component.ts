import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts :{contact_no : number , c_name: string , c_phn_no:string}[]
  constructor( private userServ : UserService  ) { 
  
  }

  ngOnInit() {
        this.contacts =  this.userServ.getUserContacts()
  }
  show_contact=true;
  add_con=false;
  new_name="";
  new_phn="";
           
  delet(id:any)
  {
    this.userServ.removeContact(id).subscribe(
      res=>{
     //   console.log(res)
      },
      err=>{
     //   console.log(err)
      }
    );
    this.contacts.splice(id,1);
  }
  gotoaddcontact()
  {
      this.show_contact=false;
      this.add_con=true;
  }
  addcontact(Con:{c_name:string,c_phn_no:string})
  {
    let newCon = {contact_no:this.contacts.length , c_name:Con.c_name , c_phn_no:Con.c_phn_no }
    this.userServ.addContact(newCon).subscribe(
      res=>{ console.log(res) },
      err=>{ console.log(err)}
    )
    this.contacts.push(newCon)
    this.add_con=false;
    this.show_contact=true;
  }

} 
