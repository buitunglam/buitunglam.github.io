import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Injectable({
  providedIn: 'root'
})
export class loaddingService implements HttpInterceptor {
  public count: number = 0;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
  ) {
  }
  intercept(req, next) {
    this.count++;
    if (this.count === 1 ) {
      this.spinnerService.show();
    }
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            this.count--;
            if (this.count === 0) {
              this.spinnerService.hide();
            }
          }
        },
        error => {
          this.count--;
          if (this.count === 0) {
            this.spinnerService.hide()
          }
          console.log('Đây là lỗi ' + error)
        }
      ),
    )
  }
}
