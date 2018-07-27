import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { LocalStorageHelper } from '../Helper/LocalStorageHelper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;
errorMessage:string;
  constructor(
    private _fb:FormBuilder,
    private _router:Router,
    private _localStorage:LocalStorageHelper
  ) { 
    this.form=this._fb.group({
      'email':['',[Validators.required]],
      'password':['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  onSubmit(data){
    if(data.email=='damodharr7@gmail.com' && data.password=='Welcome123'){
      console.log('hello')
      this._localStorage.setUserAuthentication('loggined',true)
      this._router.navigate(['/list'])
    }
  }
}
