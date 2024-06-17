import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.prod';
import { Classroom } from '../../classroom-management/model/classroom';
import { Course } from '../model/course';
import { Student } from '../../student-admnistration/model/student';
import { Teacher } from '../../teacher-administration/model/teacher';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.backendUrl}/course/all`)
  }

  public getCourse(oid: number): Observable<Course>{
    return this.httpClient.get<Course>(`${environment.backendUrl}/course/${oid}`);
  }

  public createCourse(course: Course): Observable<boolean> {
    debugger;
    return this.httpClient.post<boolean>(`${environment.backendUrl}/course`,course,{headers: this.httpHeaders});
  }

  public updateCourse(course: Course): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.backendUrl}/course/${course.oid}`,course,{headers: this.httpHeaders});
  }

  public getStudentNotAssociated(courseOid: number): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${environment.backendUrl}/course/studentNoAssociated/${courseOid}`);
  }

  public getTeacherNotAssociated(courseOid: number): Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(`${environment.backendUrl}/course/teacherNoAssociated/${courseOid}`);
  }

  public deleteCourses(oids: number[]): Observable<boolean>{
    const options = {
      headers: this.httpHeaders,
      body: oids
    };
    return this.httpClient.delete<boolean>(`${environment.backendUrl}/course/delete`,options);
  }
}
