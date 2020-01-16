import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import {AuthGuard} from './Guards/auth.guard';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import { FollowersFollowingPageComponent } from './Pages/followers-following-page/followers-following-page.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'signup',component:SignupPageComponent},
  {path:'home',component:HomePageComponent},
  {path:'profile',component:ProfilePageComponent},
  {path:'search/:searchString',component:SearchPageComponent},
  {path:'profile/followers',component:FollowersFollowingPageComponent},
  {path:'profile/following',component:FollowersFollowingPageComponent}
  /*{path:'home',component:HomePageComponent,canActivate:[AuthGuard]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
