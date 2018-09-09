import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.class';
import { ProductService } from './../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product: Product = null;
  public id: number;
  public subscription: Subscription;
  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.handelSnapshot();
    this.handelParams();
  }
  ngOnDestroy() {
    if (this.product) {
      this.subscription.unsubscribe();
    }
  }
  handelSnapshot() {
    const id = (+this.activatedRoute.snapshot.params['id']);
    this.product = this.productService.getProductsById(id);
  }
  // handel by params

  handelParams() {
     this.subscription = this.activatedRoute.params.subscribe(data => {
        this.id = +data['id'];
      console.log(this.id);
      this.product = this.productService.getProductsById(this.id);
      console.log(this.product);
    });
  }

}
