import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {TicketBookingComponent} from './ticket-booking/ticket-booking.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './report/employee/employee.component';

const routes: Routes = [  
{ path: '', redirectTo:'/home',pathMatch:'full' },
{ path: 'home', component: HomeComponent },
{ path: 'image', component: ImageComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'ticket', component: TicketBookingComponent },
{ path: 'login', component: LoginComponent },
{ path: 'report', component: EmployeeComponent },
{path:'**',component:PageNotFoundComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
