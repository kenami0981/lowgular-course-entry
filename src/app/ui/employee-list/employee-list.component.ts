import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent {

  data$: Observable<EmployeeModel[]>= this._employeeService.getAll()
  constructor(private _employeeService: EmployeeService) {
  }
  delete(id:string) {
    this._employeeService.delete(id).subscribe()
}
}
