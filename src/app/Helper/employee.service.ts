import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Employee } from '../model/Employee';
import { httpOptions } from './HeaderOption';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    let url='/api/employees';
    return this.http.get(url,{responseType: 'json'})
  }

  addEmployee(employee:Employee):Observable<Employee>{
    
    let url='/api/employees';
    console.log('add employee service');
    return this.http.post<Employee>(url,employee,httpOptions);
  
}
deleteEmployee(id:any):Observable<any>{
    console.log('id value in delete employee',id);
  let url='/api/employees/'+id;
  console.log('delete employee service');
  return this.http.delete(url,httpOptions);

}
updateEmployee(employee:Employee):Observable<Employee>{
    
  let url='/api/employees';
  console.log('add employee service');
  return this.http.put<Employee>(url,employee,httpOptions);

}
}