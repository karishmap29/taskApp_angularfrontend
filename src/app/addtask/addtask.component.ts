import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  currentemail:any
  titleadd:any
  contentadd:any
  tasks:any
  taskadd=[]
  tdata:any
  
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){
   this.currentemail=JSON.parse(localStorage.getItem("currentemail")||"")
   
  }

  ngOnInit(): void {
    
  }
  // addtaskForm=this.fb.group({
  //   title:[""],
  //   content:[""]
  // })

  add(){
    let tdata={
      title:this.titleadd,
      content:this.contentadd
    }
    console.log(tdata);
    
    this.ds.add(JSON.parse(localStorage.getItem("currentemail") || ""),tdata).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('dashboard') 
    })
  
    
    // this.tasks=this.ds.addtrial(this.currentemail)
    // console.log(this.tasks)
   // alert('task added!')
    
  }

}
