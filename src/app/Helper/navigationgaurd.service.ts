import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { LocalStorageHelper } from './LocalStorageHelper';

@Injectable({
  providedIn: 'root'
})
export class NavigationgaurdService {

  constructor(private _router:Router,private _localStorageHelper:LocalStorageHelper) { }

  canActivate(){
    var userAuthorization = this._localStorageHelper.getUserAuthentication('loggined');
    if(userAuthorization!=undefined){
      return true;
    }
    else {
      this._router.navigate(['/Login']);
      return true;
  }
  }
}
