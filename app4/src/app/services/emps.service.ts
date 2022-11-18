import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
    this.apiUrl = "http://localhost:7777/emps";
  }

  getAllByDeptId(deptId: number): Observable<Emp[]> {
    return this.httpClient.get<Emp[]>(this.apiUrl +"?deptId="+deptId);
  }

  getById(id: number): Observable<Emp> {
    return this.httpClient.get<Emp>(this.apiUrl +"/"+id);
  }

  add(emp: Emp): Observable<Emp> {
    return this.httpClient.post<Emp>(this.apiUrl,emp);
  }

  update(emp: Emp): Observable<Emp> {
    return this.httpClient.put<Emp>(this.apiUrl+"/"+emp.id,emp);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl+"/"+id);
  }
}
