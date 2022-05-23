import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VaccinationcenterService {

  private baseUrl = 'http://localhost:8080/vaccinationcenter';

  constructor(private http : HttpClient) { }

  getVaccineCenter(id : number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/getbyid/${id}`);
  }

  createVaccineCenter(vaccinationcenter : object): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, vaccinationcenter);
  }

  updateVaccineCenter(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatebyid/${id}`, value);
  }

  deleteVaccineCenter(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getVaccineCenterList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getVaccineCenterByPincode (pin : string) : Observable<any> {
    return this.http.get(`${this.baseUrl}/getbypincode/${pin}`);
  }

}
