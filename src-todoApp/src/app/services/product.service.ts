import { Injectable } from '@angular/core';
import { Product } from './../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    {
      id: 1,
      name: 'SamSung Galaxy Note 9',
      price: 18000000,
      status: true
    },
    {
      id: 2,
      name: 'SamSung Galaxy Note 8',
      price: 10000000,
      status: false
    },
    {
      id: 3,
      name: 'Iphone X',
      price: 19000000,
      status: true
    },
    {
      id: 4,
      name: 'Xperia XZ premium',
      price: 9000000,
      status: false
    },
    {
      id: 5,
      name: 'SamSung Galaxy S9+',
      price: 14000000,
      status: true
    }
  ];
  constructor() { }

  getAllProduct(name?: string , price?: number) {
    let result: Product[] = this.products;
    if (name) {
      result = this.products.filter(x => {
        return x.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      });
    }
    if (price) {
      result  = this.products.filter(x => {
        return x.price === price;
      });
    }
    return result;
  }
  getProductsById(id: number) {
    let result = null;
    for (let i = 0; i <= this.products.length; i++) {
        if (this.products[i].id === id) {
          result = this.products[i];
          break;
        }
    }
    return result;
  }

}
