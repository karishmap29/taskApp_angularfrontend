import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeletetaskComponent } from './deletetask/deletetask.component';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  mail: any;
  email: any;
  newuser: any;
  newtitle: any;
  newcontent: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

  }
  currentuser: any
  taskdat: any
  tasky: any
  updatedtitle: any
  updatedcontent: any

  // userdetails: any = {
  //   "karishmap29@gmail.com": { email: "karishmap29@gmail.com", name: "Karishma", password: "abc123", task: [{ title: "Things to buy", content: ["sugar", "lemon", "honey"] }, { title: "To study", content: ["Angular", "ReactJS"] }, { title: "my fav", content: ["task"] }] },
  //   "abc@gmail.com": { email: "abc@gmail.com", name: "abc", password: "abc123", task: [] }
  // }

  login(email: any, psw: any) {

    const data = { email, password: psw }
    return this.http.post("http://localhost:3000/login", data)
  }

  signup(email: any, psw: any, nam: any) {
    const data = { email, password: psw, name: nam }
    return this.http.post("http://localhost:3000/signup", data)
  }

  taskdata(email: any) {
    const data = { email }
    return this.http.post("http://localhost:3000/taskdata", data)
  }


  add(email: any, task: any) {

    const data = { email, task }
    return this.http.post("http://localhost:3000/addtask", data)
  }

  updatetask(email: any, id: any, task: any) {
    const data = { email, task }
    return this.http.post("http://localhost:3000/edittask/" + id, data)

  }

  deletetask(email: any, id: any) {
    console.log(email, id);
    const body = JSON.stringify({
      email
    })
    return this.http.post("http://localhost:3000/deletetask/" + id, {email})
  }

}
