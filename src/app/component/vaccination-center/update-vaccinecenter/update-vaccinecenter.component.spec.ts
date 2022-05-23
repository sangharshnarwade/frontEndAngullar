import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVaccinecenterComponent } from './update-vaccinecenter.component';

describe('UpdateVaccinecenterComponent', () => {
  let component: UpdateVaccinecenterComponent;
  let fixture: ComponentFixture<UpdateVaccinecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVaccinecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVaccinecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
