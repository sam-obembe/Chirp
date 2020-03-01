import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './Pages/landing/landing.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FirebaseConfigService } from './Services/firebase/firebase-config.service';
import { AuthenticationService } from './Services/AuthService/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { ChirpBoxComponent } from './Components/chirp-box/chirp-box.component';
import { ChirpFeedComponent } from './Components/chirp-feed/chirp-feed.component';
import { MyhttpService } from './Services/MyHttpService/myhttp.service';
import { AuthGuard } from './Guards/auth.guard';
import { SearchboxComponent } from './Components/searchbox/searchbox.component';
import { InteractionsService } from './Services/InteractionsService/interactions.service';
import { ChirpTileComponent } from './Components/chirp-tile/chirp-tile.component';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { SearchPageComponent } from './Pages/search-page/search-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips'
import { UserTileComponent } from './Components/user-tile/user-tile.component';
import { ProfileHeaderComponent } from './Components/profile-header/profile-header.component';
import { FollowersFollowingPageComponent } from './Pages/followers-following-page/followers-following-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginFormComponent,
    SignupPageComponent,
    HomePageComponent,
    SideNavComponent,
    ChirpBoxComponent,
    ChirpFeedComponent,
    SearchboxComponent,
    ChirpTileComponent,
    ProfilePageComponent,
    SearchPageComponent,
    UserTileComponent,
    ProfileHeaderComponent,
    FollowersFollowingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [FirebaseConfigService,AuthenticationService,MyhttpService,AuthGuard,InteractionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
