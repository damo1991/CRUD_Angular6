import {InMemoryDbService} from 'angular-in-memory-web-api';
 export class TestData implements InMemoryDbService{
     createDb(){
         let employeeList=[
            {
              "id": 1,
              "first_name": "Sebastian",
              "last_name": "Eschweiler",
              "email": "sebastian@gmail.com"
            },
            {
              "id": 2,
              "first_name": "Steve",
              "last_name": "Palmer",
              "email": "steve@gmail.com"
            },
            {
              "id": 3,
              "first_name": "Ann",
              "last_name": "Smith",
              "email": "ann@gmail.com"
            }
          ]
          return {employees:employeeList}
     }
 }
