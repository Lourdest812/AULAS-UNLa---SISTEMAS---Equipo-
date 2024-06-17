import { Classroom } from "../../classroom-management/model/classroom"
import { Student } from "../../student-admnistration/model/student"
import { Teacher } from "../../teacher-administration/model/teacher"

export class Course {
  oid!: number
  subject!: string
  dictationYear!: string
  student_limit!: number
  classroomOid!: number;
  classroomName!: string;
  fourMonthPeriod!: FourMonthPeriod
  students!: Student[]
  teachers!: Teacher[]
}

export enum FourMonthPeriod {
  FIRST_QUARTER = "Primer Cuatrimestre",
  SECOND_TERM = "Segundo Cuatrimestre",
  ANNUAL = "Anual"
}
