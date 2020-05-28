import { Injectable } from '@angular/core';
import  {HttpClient , HttpParams} from '@angular/common/http'
import { Router } from '@angular/router';
import {UserModel} from '../UserAccount/user/user.model';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private userUrl="user";
  private noteUrl = "user/note"
  private contactUrl = "user/contact"
   user = new UserModel();

   mail_id:string;

  constructor(private http : HttpClient , private router:Router) { 

  }

  getUser(){

     // console.log(this.mail_id)
    this.http.post<UserModel>(this.userUrl,{mail_id:this.mail_id}).subscribe(
      res=>{
        this.user = res;
      //  console.log(this.user);
      },
      err=>{
     //   console.log(err);
      }
    )

    

  }

  setMailid()
  {
   // console.log("asa",mail_id)
      this.mail_id = localStorage.getItem('mailid');  
  }
  getMailid(){
    return this.mail_id; 
  }
  getUserDetails()
  {
    return this.http.post<UserModel>(this.userUrl,{mail_id:this.mail_id})
  }

  getUserNotes()
  {
    return this.user.note;
  }

  getUserContacts()
  {
    return this.user.contact;
  }

  addNote(data)
  {
    return this.http.post(this.noteUrl, {mail_id:this.mail_id , title:data.title , content : data.content} )
  }

  removeNote( i )
  {
    //this.user.note.slice(i,1)
    
    return this.http.put(this.noteUrl,{mail_id:this.mail_id , note_no:i} )
  }

  addContact(data)
  {
    return this.http.post(this.contactUrl,{mail_id:this.mail_id , c_name:data.c_name , c_phn_no:data.c_phn_no })
             
  }
  removeContact( i )
  {
    return this.http.put(this.contactUrl,{mail_id:this.mail_id , contact_no:i}  )
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate([['/']])
  }

}
