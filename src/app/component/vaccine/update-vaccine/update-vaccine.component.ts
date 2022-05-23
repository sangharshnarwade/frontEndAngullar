import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Vaccine } from 'src/app/model/vaccine/vaccine';
import { VaccineService } from 'src/app/service/vaccine/vaccine.service';

@Component({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.component.html',
  styleUrls: ['./update-vaccine.component.css']
})
export class UpdateVaccineComponent implements OnInit {

  id: number = 0;
  vaccine: Vaccine = new Vaccine();
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.vaccineService.getVaccineById(this.id).subscribe(data => {
      console.log(data);
      this.vaccine = data;
    },
      error => console.log(error));
  }


  updateVaccine() {
    this.vaccineService.updateVaccine(this.id, this.vaccine).subscribe(data => {
      console.log(data);
      this.vaccine = new Vaccine();
      this.gotoList();
    },
      error => console.log(error));
  }

  onSubmit(updateForm: { value: any }) {
    this.submitted = true;
    this.updateVaccine();
  }

  gotoList() {
    this.router.navigate(['/VaccineDetails']);
  }
}
