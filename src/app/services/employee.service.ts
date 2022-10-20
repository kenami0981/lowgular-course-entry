import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel} from "../model/employee.model";
import {map, Observable} from "rxjs";
import {EmployeeResponse} from "./employee.response";
import {ApiResponse} from "./api.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees').pipe(map((response:ApiResponse<EmployeeResponse[]>)=> {
        return response.data.map((EmployeeResponse: EmployeeResponse) => {
          return {
            name: EmployeeResponse.employee_name,
            age: EmployeeResponse.employee_age,
            image: EmployeeResponse.profile_image,
            salary: EmployeeResponse.employee_salary,
            id: EmployeeResponse.id,
          }
        })
      })
    )
  }
  delete(id: string): Observable<void> {
    return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/'+id).pipe(map(_ => void 0));
  }
  create(employee: EmployeeModel): Observable<void> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee).pipe(map(_ => void 0))
  }
}
