import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from '../../models/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
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
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }

  onSearch() {
    this.routerService.navigate(['/products'], {queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''}});
  }

}
