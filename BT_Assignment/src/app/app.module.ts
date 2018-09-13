import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpProductInterceptor } from './services/product.interceptor';
// import to use routes from app.routes
import { appRouter } from './app.routes';
// service
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';
// import guard
import { AuthorGuard } from "./services/guard/author.guard";
import { AccessGuard } from "./services/guard/access.guard";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpProductInterceptor,
      multi: true,
    },
    ProductService,
    AuthorGuard,
    AccessGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
