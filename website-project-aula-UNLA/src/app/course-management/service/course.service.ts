import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.prod';
import { Classroom } from '../../classroom-management/model/classroom';
import { Course } from '../model/course';

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
    return this.httpClient.post<boolean>(`${environment.backendUrl}/course`,course,{headers: this.httpHeaders});
  }

  public updateCourse(course: Course): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.backendUrl}/course/${course.oid}`,course,{headers: this.httpHeaders});
  }

  public deleteCourses(oids: number[]): Observable<boolean>{
    const options = {
      headers: this.httpHeaders,
      body: oids
    };
    return this.httpClient.delete<boolean>(`${environment.backendUrl}/course/delete`,options);
  }
}
