import { Component } from '@angular/core';
import { Router } from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-app';
  user = {
    name: 'Arthur',
    age: 42
  };
  constructor(
    public routerService: Router,
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onLogOut() {
    if ( localStorage.getItem('user') ) {
      localStorage.removeItem('user');
      this.routerService.navigateByUrl('/')
    }
  }

}
