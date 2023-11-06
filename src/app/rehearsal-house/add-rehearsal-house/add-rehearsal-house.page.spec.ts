import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRehearsalHousePage } from './add-rehearsal-house.page';

describe('AddRehearsalHousePage', () => {
  let component: AddRehearsalHousePage;
  let fixture: ComponentFixture<AddRehearsalHousePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddRehearsalHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
