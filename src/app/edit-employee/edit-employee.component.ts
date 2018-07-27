import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../model/Employee';
import { LocalStorageHelper } from '../Helper/LocalStorageHelper'
import { EmployeeService } from '../Helper/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  form: FormGroup;
  model: Employee;
  id: string;
  constructor(private _router: Router, private _fb: FormBuilder, private _activatedRoute: ActivatedRoute,
    private _localStorage: LocalStorageHelper,
    private _employeeService: EmployeeService) {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.model = this._localStorage.getEmployeeDetails(this.id);
    this.form = _fb.group({
      'id': [this.model.id, [Validators.required]],
      'first_name': [this.model.first_name, [Validators.required]],
      'last_name': [this.model.last_name, [Validators.required]],
      'email': [this.model.email, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit(value) {
    this.model = value;
    console.log(this.model);
    this._employeeService.updateEmployee(this.model).subscribe(res => {

      let emp: Employee = res;
      //console.log(emp.email);
      // console.log(res.headers.get('Content-Type'));		
    },
      err => {
        console.log(err);
      }
    );
    this._localStorage.deleteCookies(this.id);
    this._router.navigate(['/list']);
  }
}
