import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes : { note_no:number,title:string ,content:string }[];
  show_content=true;
  add_note=false;
  new_title="";
  new_content="";
  expand : boolean[]

  constructor(private userServ : UserService) { }

  ngOnInit() {
    this.notes = this.userServ.getUserNotes()
    this.expand = new Array(this.notes.length).fill(false);
  }
  
  delet(id:any)
  {
      this.userServ.removeNote(id).subscribe(
        res=>{
         // console.log(res)
        },
        err=>{
         // console.log(err)
        }
      );
      this.notes.splice(id,1);
  }
  gotoaddnote()
  {
      this.show_content=false;
      this.add_note=true;
  }
  addnote(Note:{title:string , content : string})
  {
      let newNote = {note_no:this.notes.length,title:Note.title , content:Note.content}
      this.userServ.addNote(newNote).subscribe(
        res=>{ console.log(res) },
        err=>{ console.log(err)}
      )
      this.notes.push(newNote);
      this.add_note=false;
      this.show_content=true;
  }

}
