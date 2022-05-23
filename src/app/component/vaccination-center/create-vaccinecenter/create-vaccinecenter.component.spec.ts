import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVaccinecenterComponent } from './create-vaccinecenter.component';

describe('CreateVaccinecenterComponent', () => {
  let component: CreateVaccinecenterComponent;
  let fixture: ComponentFixture<CreateVaccinecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVaccinecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVaccinecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
