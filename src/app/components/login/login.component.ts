



import { Component, OnInit } from '@angular/core';
import { CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

_userLogin : AuthGuardService ;
 loginUser : any ;
 _router : Router;
  static userDetails: any = [];
  static userLetterScores: any = [];

  constructor(_userLoginRef : AuthGuardService, private routerRef : Router) {
    this._userLogin = _userLoginRef
    this._router = routerRef
    };

    
    userLogin(email : any , password : any) {
      this._userLogin.userLogin(email, password).subscribe( (data) =>{
        if(data == null ) {
          console.log('User not found, login failed');
          alert('Login failed');
        }
        else {
          this._userLogin.userDetail = data ; 
          console.log ('Login successful');
          console.log(data);
          this._userLogin.isUserLoggedin = true;
          this._router.navigateByUrl("/home");

          // this code should grab letter scores and put it into the userLetterScores array
          this._userLogin.getUserLetterScores(email).subscribe( (data) => {LoginComponent.userLetterScores = data;
            console.log(LoginComponent.userLetterScores) 
          });

          // the following code should check if admin, and if true, gives access to admin component
            this._userLogin.getUserDetails(email).subscribe( (data) => {LoginComponent.userDetails = data;
              console.log(LoginComponent.userDetails) 
            });


        }

      },(err) => {
        console.log('Login failed');
        alert('Login failed');
      });

  };
  
  




      ngOnInit(): void {
      }
    


  }
    