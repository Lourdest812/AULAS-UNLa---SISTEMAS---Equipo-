import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../student-admnistration/model/student';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit {

  @Input()
  listStudent!: Student[];

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  constructor(){}

  ngOnInit(): void {
  }

  public finishDetail(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
  }
}
