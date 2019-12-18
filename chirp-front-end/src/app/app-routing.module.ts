import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';


const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'signup',component:SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
