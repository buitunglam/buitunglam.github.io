import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../models/product.class';
import {ProductService} from '../../services/product.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product: Product;

  public subscription: Subscription;
  public subscription2: Subscription;

  constructor(
    public productService: ProductService,
    public activatedRoute: ActivatedRoute,
    public routerService: Router
  ) {
  }

  // handel by params
  handelParams() {
    this.subscription = this.activatedRoute.params.subscribe(data => {
      let id = +data['id'];
      this.subscription2 = this.productService.getProductsById(id).subscribe(data => {
        this.product = data;
      });
    });
  }

  // handel routes to edit
  onEdit() {
    // this.routerService.navigate([`edit/${this.id}`],{
    //   relativeTo: this.activatedRoute.parent
    // });
    // this is the first way
    this.routerService.navigate(['edit'], {
      relativeTo: this.activatedRoute.parent
    });
    // this is the second way to do this
  }

  ngOnInit() {
    this.handelParams();
  }

  ngOnDestroy() {
    if (this.product) {
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
    }
  }
}
