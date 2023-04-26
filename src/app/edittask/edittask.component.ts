import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  tasks: any
  user: any
  useremail: any
  pid: any
  toupdate: any
  updatedTask: any
  updatedtitle: any
  updatedcontent: any

  constructor(private ds: DataService, private ar: ActivatedRoute, private router: Router) {

    if (localStorage.getItem("currentemail")) {
      this.user = JSON.parse(localStorage.getItem("currentUser") || "")
      this.useremail = JSON.parse(localStorage.getItem("currentemail") || "")
      console.log(this.useremail);
      this.tasks = JSON.parse(localStorage.getItem("tasks") || "")
      // this.tasks = this.ds.userdetails[this.useremail].task
      console.log(this.tasks);


    }
  }


  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })
    console.log(this.tasks[this.pid]);
    this.toupdate = {
      title: this.tasks[this.pid].title,
      content: this.tasks[this.pid].content
    }

  }


  updateTask(form: any) {

    console.log(this.toupdate);
    this.ds.updatetask(this.useremail, this.pid, this.toupdate).subscribe((result: any) => {
      alert(result.message)
      this.router.navigateByUrl('/dashboard')

    })

  }
}
