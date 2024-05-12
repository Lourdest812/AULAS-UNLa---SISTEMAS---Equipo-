import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { environment } from '../../../enviroments/environment.prod';


@Injectable({providedIn: 'root'})
export class StudentService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.backendUrl}/student/all`)
  }

  public getStudent(oid: number): Observable<Student>{
    return this.httpClient.get<Student>(`${environment.backendUrl}/student/${oid}`);
  }

  public createStudent(student: Student): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.backendUrl}/student`,student,{headers: this.httpHeaders});
  }

  public updateStudent(student: Student): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.backendUrl}/student/${student.oid}`,student,{headers: this.httpHeaders});
  }

  public deleteStudents(oids: number[]): Observable<boolean>{
    const options = {
      headers: this.httpHeaders,
      body: oids
    };
    return this.httpClient.delete<boolean>(`${environment.backendUrl}/student/delete`,options);
  }


}
