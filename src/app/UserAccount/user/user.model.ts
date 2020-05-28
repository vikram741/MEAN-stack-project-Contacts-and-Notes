export class UserModel{
    name : string
    mail_id : string
    password:string
    phn_no : string
    note : {
        note_no: number,
        title :string,
        content:string
    }[]
    contact : {
        contact_no : number,
        c_name : string,
        c_phn_no : string
    }[]

    constructor()
    {
        this.name = "";
        this.mail_id="";
        this.password ="";
        this.phn_no = "";
        this.note = [];
        this.contact = [];
    }
}