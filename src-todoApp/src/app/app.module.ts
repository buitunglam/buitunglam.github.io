import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
// import to use routes from app.routes
import { appRouter } from './app.routes';
// service
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';



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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
