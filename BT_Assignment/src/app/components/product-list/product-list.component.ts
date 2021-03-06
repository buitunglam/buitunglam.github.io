import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public name: string;
  public price: number;
  public paramsSubscription: Subscription;
  constructor(
    public productService: ProductService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe(data => {
      const name = data.name;
      const price = data.price;
      this.name = name;
      this.price = price;
      this.products = this.productService.getAllProduct(name, price);
      this.getProducts();
    });
  }
  // Get data from server
  getProducts () {
    this.productService.getProductFromServer().subscribe(
      (updateProduct) => {
        this.products = updateProduct;
      }
    );
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  onSearch() {
    this.routerService.navigate(['/products/list'], {queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''}});
  }

  // backToList() {
  //   // this.routerService.navigate(['products/list']); // this the second way to get back list
  //   this.routerService.navigate([''], {
  //     relativeTo: this.activatedRoute.parent
  //   }); // this is the third way to get back list.
  //   // Whatever way is fine but the second way you have to know exactly routes. EX: ['product/list']
  // }
}
