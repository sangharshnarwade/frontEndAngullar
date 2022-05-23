import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMemberStatusDetailsComponent } from './get-member-status-details.component';

describe('GetMemberStatusDetailsComponent', () => {
  let component: GetMemberStatusDetailsComponent;
  let fixture: ComponentFixture<GetMemberStatusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMemberStatusDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMemberStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
