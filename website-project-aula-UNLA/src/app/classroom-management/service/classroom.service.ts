import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.prod';
import { Student } from '../../student-admnistration/model/student';
import { Classroom } from '../model/classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  public getClassrooms(): Observable<Classroom[]> {
    return this.httpClient.get<Classroom[]>(`${environment.backendUrl}/classroom/all`)
  }

  public getClassroom(oid: number): Observable<Classroom>{
    return this.httpClient.get<Classroom>(`${environment.backendUrl}/classroom/${oid}`);
  }

  public createClassroom(classroom: Classroom): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.backendUrl}/classroom`,classroom,{headers: this.httpHeaders});
  }

  public updateClassroom(classroom: Classroom): Observable<boolean>{
    return this.httpClient.put<boolean>(`${environment.backendUrl}/classroom/${classroom.oid}`,classroom,{headers: this.httpHeaders});
  }

  public deleteClassrooms(oids: number[]): Observable<boolean>{
    const options = {
      headers: this.httpHeaders,
      body: oids
    };
    return this.httpClient.delete<boolean>(`${environment.backendUrl}/classroom/delete`,options);
  }
}
