import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Product } from "../models/product.class";
export class HttpProductInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<Product>, next: HttpHandler){
      const newRequest = req.clone({
        headers:  req.headers.set('Authorization','token-here')
      });
      console.log(newRequest);
      console.log(newRequest.body);
      return next.handle(newRequest);
    }
}
