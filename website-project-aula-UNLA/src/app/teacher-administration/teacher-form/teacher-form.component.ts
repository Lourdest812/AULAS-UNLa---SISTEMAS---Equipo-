import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../model/teacher';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.css'
})
export class TeacherFormComponent {

  @Input()
  public teacherElement!: Teacher;

  public teacherForm!: FormGroup;

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  constructor(private fb: FormBuilder){
    this.initializeStudentForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private initializeStudentForm(): void {
    this.teacherForm = this.fb.group({
      oid: [null,],
      name:[null,],
      lastName:[null,],
      documentNumber:[null,]
    })
  }

  private saveData(): void {
    if(this.teacherForm.controls['oid'].value !== null && this.teacherForm.controls['oid'].value !== undefined){
      this.teacherElement.oid = this.teacherForm.controls['oid'].value;
    }
    if(this.teacherForm.controls['name'].value !== null && this.teacherForm.controls['name'].value !== undefined){
      this.teacherElement.name = this.teacherForm.controls['name'].value;
    }
    if(this.teacherForm.controls['lastName'].value !== null && this.teacherForm.controls['lastName'].value !== undefined){
      this.teacherElement.lastName = this.teacherForm.controls['lastName'].value;
    }
    if(this.teacherForm.controls['documentNumber'].value !== null && this.teacherForm.controls['documentNumber'].value !== undefined){
      this.teacherElement.documentNumber = this.teacherForm.controls['documentNumber'].value;
    }
  }

  public loadData(): void {
    this.teacherForm.controls['oid'].setValue(this.teacherElement.oid);
    this.teacherForm.controls['name'].setValue(this.teacherElement.name);
    this.teacherForm.controls['lastName'].setValue(this.teacherElement.lastName);
    this.teacherForm.controls['documentNumber'].setValue(this.teacherElement.documentNumber);
  }

  public onSave(): void {
    this.saveData();
    this.showDialogEvent.emit(new DialogEventResponse(false,false));
    this.teacherForm.reset();
  }

  public cancelForm(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
    this.teacherForm.reset();
  }
}
