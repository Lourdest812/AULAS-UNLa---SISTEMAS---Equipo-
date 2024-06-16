import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';
import { Teacher } from '../../teacher-administration/model/teacher';
import { Classroom } from '../model/classroom';

@Component({
  selector: 'classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrl: './classroom-form.component.css'
})
export class ClassroomFormComponent {

  @Input()
  public classroomElement!: Classroom;

  public classroomForm!: FormGroup;

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  constructor(private fb: FormBuilder){
    this.initializeStudentForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private initializeStudentForm(): void {
    this.classroomForm = this.fb.group({
      oid: [null,],
      name:[null,],
      capability:[null,],
      hasBlackboard:[null,],
      hasProjector:[null,]
    })
  }

  private saveData(): void {
    if(this.classroomForm.controls['oid'].value !== null && this.classroomForm.controls['oid'].value !== undefined){
      this.classroomElement.oid = this.classroomForm.controls['oid'].value;
    }
    if(this.classroomForm.controls['name'].value !== null && this.classroomForm.controls['name'].value !== undefined){
      this.classroomElement.name = this.classroomForm.controls['name'].value;
    }
    if(this.classroomForm.controls['capability'].value !== null && this.classroomForm.controls['capability'].value !== undefined){
      this.classroomElement.capability = this.classroomForm.controls['capability'].value;
    }
    if(this.classroomForm.controls['hasBlackboard'].value !== null && this.classroomForm.controls['hasBlackboard'].value !== undefined){
      this.classroomElement.hasBlackboard = this.classroomForm.controls['hasBlackboard'].value;
    }
    if(this.classroomForm.controls['hasProjector'].value !== null && this.classroomForm.controls['hasProjector'].value !== undefined){
      this.classroomElement.hasProjector = this.classroomForm.controls['hasProjector'].value;
    }
  }

  public loadData(): void {
    this.classroomForm.controls['oid'].setValue(this.classroomElement.oid);
    this.classroomForm.controls['name'].setValue(this.classroomElement.name);
    this.classroomForm.controls['capability'].setValue(this.classroomElement.capability);
    this.classroomForm.controls['hasBlackboard'].setValue(this.classroomElement.hasBlackboard);
    this.classroomForm.controls['hasProjector'].setValue(this.classroomElement.hasProjector);
  }

  public onSave(): void {
    this.saveData();
    this.showDialogEvent.emit(new DialogEventResponse(false,false));
    this.classroomForm.reset();
  }

  public cancelForm(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
    this.classroomForm.reset();
  }

}
