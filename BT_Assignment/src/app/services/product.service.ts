import {Injectable} from '@angular/core';
import {Product} from '../models/product.class';
import {Observable} from "rxjs";
import {of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

import {promise} from "selenium-webdriver";
import filter = promise.filter;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productApi = 'http://5b9615e052764b001413bba1.mockapi.io/Products';
  public products: Product[];
  public product: Product;

  constructor(
    public http: HttpClient,
  ) {
  }

  // get data from server
  getProductFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApi).pipe(
      tap(getProduct => {
        this.products = getProduct;
        console.log(this.products);
      }),
      catchError(err => of(err))
    );
  }

  getAllProduct(name?: string, price?: number) {
    this.getProductFromServer();
    let result: Product[] = this.products;
    if (name) {
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      });
    }
    if (price) {
      result = this.products.filter(x => {
        return x.price == price;
      });
    }
    return result;
  }

  getProductsById(id: number) : Observable<Product> {
    return this.http.get<Product>(`${this.productApi}/${id}`).pipe(
      tap(getProduct => {
        this.product = getProduct;
      }),
      catchError(err => of(err))
    );
  }
}
