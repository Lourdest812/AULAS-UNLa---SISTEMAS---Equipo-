import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../model/student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {

  @Input()
  public visibleModal!: boolean;

  @Input()
  public studentElement!: Student;

  public studentForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.initializeStudentForm();
  }

  ngOnInit(): void {
    console.log(this.studentElement);
  }

  private initializeStudentForm(): void {
    this.studentForm = this.fb.group({
      oid: [null,],
      name:[null,],
      lastName:[null,],
      cohort:[null,],
      documentNumber:[null,]
    })
  }

  private saveData(): void {
    if(this.studentForm.controls['oid'].value !== null && this.studentForm.controls['oid'].value !== undefined){
      this.studentElement.oid = this.studentForm.controls['oid'].value;
    }
    if(this.studentForm.controls['name'].value !== null && this.studentForm.controls['name'].value !== undefined){
      this.studentElement.name = this.studentForm.controls['name'].value;
    }
    if(this.studentForm.controls['lastName'].value !== null && this.studentForm.controls['lastName'].value !== undefined){
      this.studentElement.lastName = this.studentForm.controls['lastName'].value;
    }
    if(this.studentForm.controls['cohort'].value !== null && this.studentForm.controls['cohort'].value !== undefined){
      this.studentElement.cohort = this.studentForm.controls['cohort'].value;
    }
    if(this.studentForm.controls['documentNumber'].value !== null && this.studentForm.controls['documentNumber'].value !== undefined){
      this.studentElement.documentNumber = this.studentForm.controls['documentNumber'].value;
    }
  }

  public onSave(): void {
    this.saveData();
    this.visibleModal = false;
  }

  public cancelForm(): void {
    this.visibleModal = false;
  }

}
