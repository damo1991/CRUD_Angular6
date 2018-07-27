import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Employee } from '../model/Employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../Helper/employee.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  model = new Employee();
  submitted: boolean = false
  constructor(private _fb: FormBuilder,private _router:Router,private _employeeService:EmployeeService) {
    this.form = _fb.group({
      'id': ['', [Validators.required]],
      'first_name': ['', [Validators.required]],
      'last_name': ['', [Validators.required]],
      'email': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }
  onSubmit(value) {
    this.model = value;
    console.log(this.model);
    this._employeeService.addEmployee(this.model).subscribe(res => { 
      
      let emp: Employee = res;
      console.log(emp.email);
     // console.log(res.headers.get('Content-Type'));		
    },
    err => {
      console.log(err);
    }
   );
    this._router.navigate(['/list'])
  }
}
