import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageProjectsSectionComponent } from './landing-page-projects-section.component';

describe('LandingPageProjectsSectionComponent', () => {
  let component: LandingPageProjectsSectionComponent;
  let fixture: ComponentFixture<LandingPageProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageProjectsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
