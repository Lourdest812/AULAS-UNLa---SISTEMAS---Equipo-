import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, FourMonthPeriod } from '../model/course';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogEventResponse } from '../../shared/shared-class/dialogEventResponse';
import { Subject } from 'rxjs';
import { Classroom } from '../../classroom-management/model/classroom';
import { ClassroomService } from '../../classroom-management/service/classroom.service';
import { Student } from '../../student-admnistration/model/student';
import { Teacher } from '../../teacher-administration/model/teacher';
import { StudentService } from '../../student-admnistration/service/student.service';
import { TeacherService } from '../../teacher-administration/service/teacher.service';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {

  @Input()
  public courseElement!: Course;

  public courseForm!: FormGroup;

  public periods: { label: string, value: FourMonthPeriod }[] = [];

  @Output()
  public showDialogEvent = new EventEmitter<DialogEventResponse>;

  // Lista para el select del aula que se le va a asignar al curso
  public classrooms!: Classroom[];

  // Lista para el pickList de Alumnos
  sourceStudent!: Student[];
  targetStudent!: Student[];


  // Lista para el pickList de profesores
  sourceTeacher!: Teacher[];
  targetTeacher!: Teacher[];

  constructor(
    private fb: FormBuilder,
    private classroomService: ClassroomService,
    private courseService: CourseService,
    private studentService: StudentService,
    private teacherService: TeacherService){
    this.initializeCourseForm();
  }

  ngOnInit(): void {
    this.loadData();
    this.loadClassrooms();
    this.periods = this.enumToArray(FourMonthPeriod);
    this.loadPickListStudent();
    this.loadPickListTeacher();
  }

  private initializeCourseForm(): void {
    this.courseForm = this.fb.group({
      oid: [null,],
      subject: [null,],
      studentLimit:[null,],
      classroom:[null,],
      fourMonthPeriod:[null,],
      dictationYear:[null,]
    })
  }

  private saveData(): void {
    if(this.courseForm.controls['oid'].value !== null && this.courseForm.controls['oid'].value !== undefined){
      this.courseElement.oid = this.courseForm.controls['oid'].value;
    }
    if(this.courseForm.controls['subject'].value !== null && this.courseForm.controls['subject'].value !== undefined){
      this.courseElement.subject = this.courseForm.controls['subject'].value;
    }
    if(this.courseForm.controls['studentLimit'].value !== null && this.courseForm.controls['studentLimit'].value !== undefined){
      this.courseElement.student_limit = this.courseForm.controls['studentLimit'].value;
    }
    if(this.courseForm.controls['classroom'].value !== null && this.courseForm.controls['classroom'].value !== undefined){
      this.courseElement.classroomOid = this.courseForm.controls['classroom'].value.oid;
      this.courseElement.classroomName = this.courseForm.controls['classroom'].value.name;
    }
    if(this.courseForm.controls['fourMonthPeriod'].value !== null && this.courseForm.controls['fourMonthPeriod'].value !== undefined){
      this.courseElement.fourMonthPeriod = this.courseForm.controls['fourMonthPeriod'].value.value;
    }
    if(this.courseForm.controls['dictationYear'].value !== null && this.courseForm.controls['dictationYear'].value !== undefined){
      this.courseElement.dictationYear = this.courseForm.controls['dictationYear'].value;
    }


    if(this.targetStudent.length >= 1 ){
      this.courseElement.students = this.targetStudent;
    }

    if(this.targetStudent.length >= 1){
      this.courseElement.teachers = this.targetTeacher;
    }

  }

  public loadData(): void {
    this.courseForm.controls['oid'].setValue(this.courseElement.oid);
    this.courseForm.controls['subject'].setValue(this.courseElement.subject);
    this.courseForm.controls['studentLimit'].setValue(this.courseElement.student_limit);
    if(this.courseElement.classroomOid !== null && this.courseElement.classroomOid !== undefined){
      this.classroomService.getClassroom(this.courseElement.classroomOid).subscribe({
        next: (value: Classroom) =>{
          this.courseForm.controls['classroom'].setValue(value);
        }
      })
    }
    this.courseForm.controls['fourMonthPeriod'].setValue(this.getEnumValue(this.courseElement.fourMonthPeriod));
    this.courseForm.controls['dictationYear'].setValue(this.courseElement.dictationYear);
  }

  public onSave(): void {
    this.saveData();
    this.showDialogEvent.emit(new DialogEventResponse(false,false));
    this.courseForm.reset();
  }

  public cancelForm(): void {
    this.showDialogEvent.emit(new DialogEventResponse(false,true));
    this.courseForm.reset();
  }

  public loadClassrooms(): void {
    this.classroomService.getClassrooms().subscribe({
      next: (value: Classroom[]) => {
        this.classrooms = value;
      }
    })
  }

  public loadPickListStudent(): void{
    if(this.courseElement.oid){
      this.courseService.getStudentNotAssociated(this.courseElement.oid).subscribe({
        next: (value: Student[]) => {
          this.sourceStudent = value;
        }
      })
    } else {
      this.studentService.getStudents().subscribe({
        next: (value: Student[]) =>{
          this.sourceStudent = value;
        }
      })
    }
    this.targetStudent = structuredClone(this.courseElement.students);
  }

  public loadPickListTeacher(): void{
    if(this.courseElement.oid){
      this.courseService.getTeacherNotAssociated(this.courseElement.oid).subscribe({
        next: (value: Teacher[]) =>{
          this.sourceTeacher = value;
        }
      })
    } else {
      this.teacherService.getTeachers().subscribe({
        next: (value: Teacher[]) => {
          this.sourceTeacher = value;
        }
      })
    }
    this.targetTeacher = structuredClone(this.courseElement.teachers) ;
  }

  enumToArray(enumObj: any): { label: string, value: FourMonthPeriod }[] {
    return Object.keys(enumObj).map(key => ({
      label: this.getEnumLabel(enumObj[key]),
      value: key as FourMonthPeriod
    }));
  }

  getEnumLabel(enumValue: FourMonthPeriod): string {
    switch (enumValue) {
      case FourMonthPeriod.FIRST_QUARTER:
        return 'Primer Cuatrimestre';
      case FourMonthPeriod.SECOND_TERM:
        return 'Segundo Cuatrimestre';
      case FourMonthPeriod.ANNUAL:
        return 'Anual';
      default:
        return '';
    }
  }

  public getEnumValue(fourMonthPeriod: string){
    switch(fourMonthPeriod){
      case 'FIRST_QUARTER':
        return { label: 'Primer Cuatrimestre', value: "FIRST_QUARTER" };

      case 'SECOND_TERM':
        return { label: 'Segundo Cuatrimestre', value: "SECOND_TERM"};

      case 'ANNUAL':
        return { label: 'Anual', value: "ANNUAL"};
      default:
        return '';
    }
  }

}
