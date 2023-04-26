import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any
  useremail: any
  taskdataresult: any
  id: any
  searchkey: any = ""
  searchTerm: any
flag:any=0


  toggledarkTheme(): void {
    document.body.classList.toggle('dark-theme')
  }
  constructor(private ds: DataService,private router:Router) {
    if (localStorage.getItem("currentUser")) {
      this.user = JSON.parse(localStorage.getItem("currentUser") || "")
      this.useremail = JSON.parse(localStorage.getItem("currentemail") || "")
      //   // console.log(this.useremail);

    }

    // console.log(this.taskdataresult);




  }

  ngOnInit(): void {

  }
show(){
  this.flag=1;
  this.ds.taskdata(JSON.parse(localStorage.getItem("currentemail") || "")).subscribe((result: any) => {
    this.taskdataresult = result.tasks
    localStorage.setItem("tasks", JSON.stringify(this.taskdataresult))
  })

}

logout(){
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentemail")
  this.router.navigateByUrl("")
}



}
