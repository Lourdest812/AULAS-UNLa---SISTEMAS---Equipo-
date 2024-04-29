import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrl: './student-main-page.component.css'
})
export class StudentMainPageComponent implements OnInit {

  public students!: Student[];

  public seletedStudents!: Student;

  public visibleModal: boolean = false;

  public studentElement: Student = new Student();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (value: Student[]) => {
        this.students = value;
      }
    })
  }

  public isRowSelectable(event: Student): boolean {
    return event.oid !== null;
  }

  public showDialog(){
    this.visibleModal = true;
  }


  public selectedRow(element: Student): void{
    console.log(element);
  }


}
