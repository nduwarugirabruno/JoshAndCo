import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailRehearsalHousePage } from './detail-rehearsal-house.page';

describe('DetailRehearsalHousePage', () => {
  let component: DetailRehearsalHousePage;
  let fixture: ComponentFixture<DetailRehearsalHousePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailRehearsalHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
