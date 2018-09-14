import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public err = 0;
  constructor(
    public routerService: Router,
  ) { }

  ngOnInit() {
  }
  onLogin(name:string,password:string) {
    let user = {
      userName: name,
      userPassword: password
    };
    if( name == "admin" && password == "admin") {
      localStorage.setItem('user', JSON.stringify(user));
      this.routerService.navigateByUrl('courses');
    }else{
      this.err = -1;
    }
  }

}
