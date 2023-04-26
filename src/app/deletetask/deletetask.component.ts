import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deletetask',
  templateUrl: './deletetask.component.html',
  styleUrls: ['./deletetask.component.css']
})
export class DeletetaskComponent implements OnInit{

  useremail:any



  constructor(private ar:ActivatedRoute,private ds:DataService,private router:Router){
    if(localStorage.getItem("currentemail") || ""){
      this.useremail = JSON.parse(localStorage.getItem("currentemail") || "")

    }
  }


  pid:any

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
  })
  this.ds.deletetask( JSON.parse(localStorage.getItem("currentemail") || ""),this.pid).subscribe((result:any)=>{
    alert(result.message)
  this.router.navigateByUrl('/dashboard')
 
  
})

// delete(){
//   this.ds.deletetask( JSON.parse(localStorage.getItem("currentemail") || ""),this.pid).subscribe((result:any)=>{
//     alert(result.message)
//   this.router.navigateByUrl('/dashboard')
// })

// }
}}

