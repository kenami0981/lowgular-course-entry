import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import {EmployeeModel} from "../../model/employee.model";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    salary: new FormControl(),
  });

  constructor(private _employeeService: EmployeeService) {
  }
  create(form: EmployeeModel) {
    this._employeeService.create({name: form.name, salary: form.salary, age: form.age, id:'',image:''}).subscribe()

  }
}
