import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public error = 0;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  onAccess(key) {
    if (key === '123456') {
      localStorage.setItem('key',key);
      this.router.navigate(['login']);
    }else{
      this.error = -1;
    }

  }
}
