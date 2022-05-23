import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'http://localhost:8080/api/admin/appointment';

  constructor(private http:HttpClient) { }

  getAppointment(bookingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookingId/${bookingId}`);
  }

  createAppointment(appointment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/new`, appointment);
  }

  updateAppointment(bookingId: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${bookingId}`, value);
  }

  deleteAppointment(bookingId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${bookingId}`, { responseType: 'text' });
  }

  getAppointmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  appointmentDetails(bookingId: number, value: any): Observable<Object> {
    return this.http.get(`${this.baseUrl}/get/${bookingId}`, value);
  }
 
}


