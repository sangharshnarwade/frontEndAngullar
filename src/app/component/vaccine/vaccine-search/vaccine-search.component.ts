import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Vaccine } from 'src/app/model/vaccine/vaccine';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine-search',
  templateUrl: './vaccine-search.component.html',
  styleUrls: ['./vaccine-search.component.css']
})
export class VaccineSearchComponent implements OnInit {

  vaccineName: string = "";
  vaccine: Vaccine = new Vaccine();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.vaccine = new Vaccine();
    this.vaccineName = this.route.snapshot.params['vaccineName'];
    this.vaccineService.getVaccineByName(this.vaccineName).subscribe(data => {
      console.log(data);
      this.vaccine = data;
    },
      error => console.log(error));
  }

}
