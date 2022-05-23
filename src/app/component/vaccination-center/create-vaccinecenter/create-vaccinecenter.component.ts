import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccinationCenter } from 'src/app/model/vaccination-center/vaccinationcenter';
import { VaccinationcenterService } from 'src/app/service/vaccination-center/vaccinationcenter.service';


@Component({
  selector: 'app-create-vaccinecenter',
  templateUrl: './create-vaccinecenter.component.html',
  styleUrls: ['./create-vaccinecenter.component.css']
})
export class CreateVaccinecenterComponent implements OnInit {
  center : VaccinationCenter = new VaccinationCenter();
  submitted = false;
  constructor(private centerService : VaccinationcenterService, private router : Router) { }

  ngOnInit(): void {
  }

  newvaccinecenter(): void {
    this.submitted = false;
    this.center = new VaccinationCenter();
  }
  save() {
    this.centerService.createVaccineCenter(this.center).subscribe(data => {
      console.log(data)
      this.center = new VaccinationCenter();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/vaccinecenters']);
  }

}
