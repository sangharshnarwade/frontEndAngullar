import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVaccinecenterComponent } from './details-vaccinecenter.component';

describe('DetailsVaccinecenterComponent', () => {
  let component: DetailsVaccinecenterComponent;
  let fixture: ComponentFixture<DetailsVaccinecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVaccinecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVaccinecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
