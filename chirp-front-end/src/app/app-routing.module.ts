import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import {AuthGuard} from './Guards/auth.guard';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'home',component:HomePageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
