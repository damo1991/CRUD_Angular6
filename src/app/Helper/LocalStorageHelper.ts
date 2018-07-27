import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-local-storage';
import { CookieService } from 'ngx-cookie-service';
import { Employee } from '../model/Employee';
@Injectable({
    providedIn: 'root'
})
export class LocalStorageHelper {
    constructor(private _cookieService: CookieService) {

    }
    private setObjectValue(key: any, value: any) {
        this._cookieService.set(key, value);
    }

    private getObjectValue(key: any) {
        let item = this._cookieService.get(key);
        if (item)
            return item;
        return null;
    }
    getUserAuthentication(key: any) {
        return this._cookieService.get(key);
    }

    setUserAuthentication(key: any, value: any) {
        console.log('in localstorage')
        this._cookieService.set(key, value);
        console.log(this._cookieService.get(key))
    }
    setEmployeeDetails(employee: Employee) {
        console.log('set user details in cookie');
        this._cookieService.set(employee.id.toString(), JSON.stringify(employee));
    }
    getEmployeeDetails(id: any): Employee {
        console.log('getting user details in cookie');
        let emp: Employee = JSON.parse(this._cookieService.get(id));
        console.log(emp)
        return emp;
    }
    deleteCookies(id: any) {
        this._cookieService.delete(id);
    }


}