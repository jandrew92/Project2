import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './services/login.service';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { AdminGuardService } from './services/admin-guard.service';
import { TypingComponent } from './components/typing/typing.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthService } from './services/auth.service';
import { SignoutComponent } from './components/signout/signout.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { FindAccountComponent } from './components/find-account/find-account.component';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LeaderboardComponent,
    UserProfileComponent,
    ViewLoginComponent,
    SignoutComponent,
    UserSettingsComponent,
    FindAccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [LoginService, AdminGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
