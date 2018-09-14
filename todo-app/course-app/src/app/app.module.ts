import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { HttpClientModule,HTTP_INTERCEPTORS,HttpClient } from "@angular/common/http";
import { CourseManagementModule } from "./course-managerment/course-management.module";
import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { ContactModule } from "./contact/contact.module";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LoginModule } from "./login/login.module";
// import languge
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { TranslateHttpLoader} from "@ngx-translate/http-loader";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home.component';

import { AboutComponent } from './about/components/about/about.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { CoursesComponent } from './course-managerment/components/courses/courses.component';
import { CourseListComponent} from "./course-managerment/components/course-list/course-list.component";
import { loaddingService } from "./course-managerment/service/loadding.service";
import { LoginComponent} from "./login/components/login/login.component";
import { LoginAdminGuard } from "./login-admin.guard";

// Translate

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginAdminGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [LoginAdminGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [LoginAdminGuard],
  },
  {
    path: 'courses',
    component: CourseListComponent,
    canActivate: [LoginAdminGuard],
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CourseManagementModule,
    ContactModule,
    HomeModule,
    AboutModule,
    LoginModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LoginAdminGuard,
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: loaddingService,
        multi: true,
      },
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
