import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccineRegistrationService {
  private baseUrl = 'http://localhost:8080/api/user/vaccine/registration';
  
  constructor(private http : HttpClient) { }
  
  addVaccineRegistration(registration: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, registration);
  }

}
