import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Vaccine } from 'src/app/model/vaccine/vaccine';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-vaccine-view',
  templateUrl: './vaccine-view.component.html',
  styleUrls: ['./vaccine-view.component.css']
})
export class VaccineViewComponent implements OnInit {

  vaccine!: Observable<Vaccine[]>;

  constructor(private vaccineService: VaccineService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.vaccine = this.vaccineService.getAllVaccine();
  }

}
