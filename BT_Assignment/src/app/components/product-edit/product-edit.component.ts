import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import {Product} from "../../models/product.class";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit,OnDestroy {
  private idEdit: number;
  private product: Product;
  public subscription: Subscription;
  constructor(
    public productService: ProductService,
    public activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
     this.handelParams();
  }

  handelParams() {
    this.activateRoute.parent.params.subscribe(data => {
      this.idEdit = +data['id'];
      this.subscription = this.productService.getProductsById(this.idEdit).subscribe(
          data => {
            this.product = data;
            console.log(this.product);
          },
        error => {
            console.log(error);
        }
      );
    });
  };
  ngOnDestroy () {
      if (this.product) {
        this.subscription.unsubscribe();
      }
  }

}
