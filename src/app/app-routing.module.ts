import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletetaskComponent } from './deletetask/deletetask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'edittask/:id',component:EdittaskComponent},
  {path:'addtask',component:AddtaskComponent},
  {path:'deletetask/:id',component:DeletetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
