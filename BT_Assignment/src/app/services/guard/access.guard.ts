import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {HomeComponent} from "../../components/home/home.component";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanDeactivate<HomeComponent> {
       canDeactivate(): boolean {
         if (localStorage.getItem('key')) {
            return true
         }
         return false;
       }
}
