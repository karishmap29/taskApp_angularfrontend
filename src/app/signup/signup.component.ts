import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}

   ngOnInit(): void {
     
   }

   signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]],
    name:['',[Validators.required,Validators.pattern("[a-zA-Z]+")]]
  })

  signup(){
    var mail=this.signupForm.value.email
    var pass=this.signupForm.value.password
    var nam=this.signupForm.value.name
    if(this.signupForm.valid){
      this.ds.signup(mail,pass,nam).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('')

      },
      result => {
        alert(result.error.message) //found from console
        this.router.navigateByUrl("")
      }
      )

    }
    else{
      alert('invalid form')
    }
    
    
  }
}
