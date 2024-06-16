import { Course } from "../../course-management/model/course"

export class Teacher {
  oid!: number
  name!: string
  lastName!: string
  documentNumber!: string
  courses!: Course[]
}
