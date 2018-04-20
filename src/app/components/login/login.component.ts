import { Component, OnInit } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
   login(event, email, password) {
    if(email=="rnkpareek@gmail.com" && password =="1234"){
      this.router.navigateByUrl('/dashboard');
    }
    else{
      console.log("password or user not matching")
      this.router.navigateByUrl('/login');
    }
  }

}
