import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import {EmployeeService} from '../Helper/employee.service';


@Component({
  selector: 'app-delete-employee',
templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  id:string;
  constructor(private _router:Router,private _activatedRoute:ActivatedRoute,private _employeeService:EmployeeService)
  { 
    this.id = this._activatedRoute.snapshot.params['id'];
    console.log('deleting function',this.id)
    this._employeeService.deleteEmployee(this.id).subscribe(res => { 
      console.log(res);
      console.log('deleted employee sucessfully');
      this._router.navigate(['/list']);		
    },
    err => {
      console.log(err);
    }
   ); 
   }
}
