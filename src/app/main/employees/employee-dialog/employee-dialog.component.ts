import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public apiService: ApiService) { }

  employeeForm = this.fb.group({
    EMPLOYEE_ID: [ null, [Validators.required]],
    EMPLOYEE_NAME: ['', [Validators.required]],
    CATEGORY_ID: ['', [Validators.required]],
    EMPLOYEE_START_DATE: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  ngOnInit() {
    this.employeeForm.setValue({
      EMPLOYEE_ID: this.data.EMPLOYEE_ID,
      EMPLOYEE_NAME: this.data.EMPLOYEE_NAME || '',
      CATEGORY_ID: this.data.CATEGORY_ID || '',
      EMPLOYEE_START_DATE: this.data.EMPLOYEE_START_DATE || '',
    });
  }

  public updateEmployee() {
    this.apiService.updateEmployee(this.employeeForm.value).subscribe();
    this.dialogRef.close();
  }
}
