import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccineRegistration } from 'src/app/model/vaccine-registration/vaccine-registration';
import { VaccineRegistrationService } from 'src/app/service/vaccine-registration/vaccine-registration.service';



@Component({
  selector: 'app-add-vaccine-registration',
  templateUrl: './add-vaccine-registration.component.html',
  styleUrls: ['./add-vaccine-registration.component.css']
})
export class AddVaccineRegistrationComponent implements OnInit {

  registration : VaccineRegistration = new VaccineRegistration();
  submitted = false;
  

  constructor(private registrationService : VaccineRegistrationService, private router : Router) { }

  ngOnInit(): void {
  }
  newVaccineRegistration(): void {
    this.submitted = false;
    this.registration = new VaccineRegistration();
  }
  save() {
    this.registrationService.addVaccineRegistration(this.registration).subscribe(data => {
      console.log(data)
      this.registration = new VaccineRegistration();
      this.addMember();
    
    }, 
    error => console.log(error));
  }
 
  onSubmit() {
    this.submitted = true;
    this.save(); 
    
  }
 addMember() {
   return this.router.navigate(['new-member'])
 }
}
