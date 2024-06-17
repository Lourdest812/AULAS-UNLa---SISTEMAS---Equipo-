import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teacher } from '../../teacher-administration/model/teacher';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';

@Component({
  selector: 'teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrl: './teacher-detail.component.css'
})
export class TeacherDetailComponent {

  @Input()
  listTeacher!: Teacher[];

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  constructor(){}
  ngOnInit(): void {
  }

  public finishDetail(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
  }
}
