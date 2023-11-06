import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RehearsalHousePage} from './rehearsal-house.page';

describe('RehearsalHousePage', () => {
	let component: RehearsalHousePage;
	let fixture: ComponentFixture<RehearsalHousePage>;

	beforeEach(async(() => {
		fixture = TestBed.createComponent(RehearsalHousePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
