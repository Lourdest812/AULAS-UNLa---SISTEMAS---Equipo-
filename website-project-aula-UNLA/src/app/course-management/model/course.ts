import { Classroom } from "../../classroom-management/model/classroom"

export interface Course {
  oid: number
  subject: string
  dictationYear: string
  student_limit: number
  classroom: Classroom
}
