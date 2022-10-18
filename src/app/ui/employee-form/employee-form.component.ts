import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {AddEmployeeModel} from "../../model/add-employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(1)]),
    salary: new FormControl(null, [Validators.min(0.000001), Validators.required])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onButtonSubmitted(FV: AddEmployeeModel) {
    alert('User was successfully added to database. Name: ' + FV.name + ', Age: ' + FV.age + ', Salary: ' + FV.salary);
    this._employeeService.createEmployee(FV).subscribe()
  }
}
