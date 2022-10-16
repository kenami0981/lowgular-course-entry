import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>(  'assets/data/employees.json')
  data = [{name:'Jacek'}, {name:'Wjotek'}]
  constructor(private _httpClient: HttpClient) {
  }
}
