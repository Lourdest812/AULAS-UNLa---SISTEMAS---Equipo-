import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../model/student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent implements OnInit {

  @Input()
  public studentElement!: Student;

  public studentForm!: FormGroup;

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  constructor(private fb: FormBuilder){
    this.initializeStudentForm();
  }

  ngOnInit(): void {
    this.loadData();
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

  public loadData(): void {
    this.studentForm.controls['oid'].setValue(this.studentElement.oid);
    this.studentForm.controls['name'].setValue(this.studentElement.name);
    this.studentForm.controls['lastName'].setValue(this.studentElement.lastName);
    this.studentForm.controls['cohort'].setValue(this.studentElement.cohort);
    this.studentForm.controls['documentNumber'].setValue(this.studentElement.documentNumber);
  }

  public onSave(): void {
    this.saveData();
    this.showDialogEvent.emit(new DialogEventResponse(false,false));
    this.studentForm.reset();
  }

  public cancelForm(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
    this.studentForm.reset();
  }

}
