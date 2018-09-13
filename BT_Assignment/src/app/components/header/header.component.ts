import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }
  logOUt() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        this.router.navigate(['login'])
    }
  }
}
