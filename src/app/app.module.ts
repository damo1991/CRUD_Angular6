import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LoginComponent } from './login/login.component';
import {NavigationgaurdService} from './Helper/navigationgaurd.service';
import {LocalStorageHelper} from './Helper/LocalStorageHelper';
import {CookieService} from 'ngx-cookie-service';
import { TestData } from './Helper/EmployeeDummyData';
import { EmployeeService } from './Helper/employee.service';



export const routes:Routes=[
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  {path:'Login',component:LoginComponent,canActivate : [NavigationgaurdService]},
  {path:'register',component:RegistrationComponent,canActivate : [NavigationgaurdService]},
  {path:'list',component:ShowEmployeesComponent,canActivate : [NavigationgaurdService]},
  {path:'edit/:id',component:EditEmployeeComponent,canActivate : [NavigationgaurdService]},
  {path:'delete/:id',component:DeleteEmployeeComponent,canActivate : [NavigationgaurdService]},
  {path:'**',redirectTo:'Login'}
  
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    ShowEmployeesComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [NavigationgaurdService,LocalStorageHelper,CookieService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
