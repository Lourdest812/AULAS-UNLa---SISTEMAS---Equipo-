import { Course } from "../../course-management/model/course"

export interface Teacher {
  oid: number
  name: string
  lastName: string
  documentNumber: string
  courses: Course[]
}
