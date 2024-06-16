import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.prod';;
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${environment.backendUrl}/teacher/all`)
  }

  public getTeacher(oid: number): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${environment.backendUrl}/teacher/${oid}`);
  }

  public createTeacher(teacher: Teacher): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.backendUrl}/teacher`, teacher,{headers: this.httpHeaders});
  }

  public updateTeacher(teacher: Teacher): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.backendUrl}/teacher/${teacher.oid}`,teacher,{headers: this.httpHeaders});
  }

  public deleteTeachers(oids: number[]): Observable<boolean>{
    const options = {
      headers: this.httpHeaders,
      body: oids
    };
    return this.httpClient.delete<boolean>(`${environment.backendUrl}/teacher/delete`,options);
  }
}
