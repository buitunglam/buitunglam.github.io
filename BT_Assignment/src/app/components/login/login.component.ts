import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: number = 0;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  onLogin(userName:string, password:any) {
      let user = {
        name: userName,
        password: password
      };
      if (userName === "admin" && password === "admin") {
          localStorage.setItem('user',JSON.stringify(user));
          this.router.navigate(['products'])
      }else{
          this.error = -1;
      }
  }
}
