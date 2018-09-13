import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import { LoginComponent } from './components/login/login.component';
import {AuthorGuard} from "./services/guard/author.guard";
import { AccessGuard } from "./services/guard/access.guard";

export const appRouter: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [AccessGuard]
  },
  {
    path: 'product/:id',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductDetailComponent},
      { path: 'edit', component: ProductEditComponent},
    ]
  },
  {
    path: 'products/list',
    component:ProductListComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthorGuard]
  },
  {
    path: 'about',
    component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent },
  {
    path: '**',
    component: NotFoundComponent },
];
