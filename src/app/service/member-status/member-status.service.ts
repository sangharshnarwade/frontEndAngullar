import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberStatusService {
  private baseUrl = 'http://localhost:8080/api/member/status';
  constructor(private http : HttpClient) { }

addMemberStatus (memberStatus : Object) :  Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, memberStatus);
  }
  getMemberStatusList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  updateMemberStatus(memberStatusId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/memberStatusId/${memberStatusId}`, value);
  }

  getMemberStatus(memberStatusId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/memberStatusId/${memberStatusId}`);
  }
  deleteMemberStatus(memberStatusId : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/memberStatusId/${memberStatusId}`, { responseType: 'text' });
  }

}


