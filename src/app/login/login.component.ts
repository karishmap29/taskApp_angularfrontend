import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['', [Validators.required, Validators.pattern("[0-9a-zA-Z]+")]]
  })
  ngOnInit(): void {

  }



  login() {
    var mail = this.loginForm.value.email
    var psw = this.loginForm.value.password
    if (this.loginForm.valid) {
      this.ds.login(mail, psw).subscribe((result:any)=>{
        localStorage.setItem("currentUser",JSON.stringify(result.currentUsername) )
        localStorage.setItem("currentemail",JSON.stringify(result.currentemail) )

        alert(result.message)
        this.router.navigateByUrl('dashboard')
      },
      result=>{
        alert(result.error.message)
      }
      )
      
      
    }
    else{
      alert('Invalid Form!!')
    }
  }
}
