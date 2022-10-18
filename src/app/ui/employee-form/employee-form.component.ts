import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    salary: new FormControl(null, [Validators.min(0.000001), Validators.required])});
  onButtonSubmitted(FV: {name:string, age: number, salary: number}) {
    alert('User was successfully added to database. Name: '+ FV.name+ ', Age: '+FV.age+', Salary: '+FV.salary);
  }
}
