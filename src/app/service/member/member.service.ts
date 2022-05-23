import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService  {

 private baseUrl = "http://localhost:8080/api/member";

  constructor(private http:HttpClient) { }
  addMember(member : object) : Observable<object> {
    return this.http.post(`${this.baseUrl}/new`, member);
  }
  
  getMemberList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/all`);
  }
  
  getMemberById(idCard : number) : Observable <any> {
    return this.http.get(`${this.baseUrl}/idcard/${idCard}`);
  }

  updateMember (idCard : number, value : any ) : Observable<object> {
    return this.http.put(`${this.baseUrl}/update/idcard/${idCard}`, value);
  }
  
  // deleteMember(idCard : number) : Observable<any>{
  //   return this.http.delete(`${this.baseUrl}/idcard/delete/${idCard}`);
  // }


}
