import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVaccinecenterComponent } from './list-vaccinecenter.component';

describe('ListVaccinecenterComponent', () => {
  let component: ListVaccinecenterComponent;
  let fixture: ComponentFixture<ListVaccinecenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVaccinecenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVaccinecenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
