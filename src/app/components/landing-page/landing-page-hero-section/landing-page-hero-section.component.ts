import { Component, signal } from '@angular/core';
import { CANDIDATE_PROFILE } from '../../../data/candidate-profile.data';

@Component({
  selector: 'app-landing-page-hero-section',
  imports: [],
  templateUrl: './landing-page-hero-section.component.html',
  styleUrl: './landing-page-hero-section.component.scss'
})
export class LandingPageHeroSectionComponent {
  profile = CANDIDATE_PROFILE;
  currentRoleIndex = signal(0);

  constructor() {
    setInterval(() => {
      this.currentRoleIndex.update(i => (i + 1) % this.profile.data.roles.length);
    }, 2500);
  }
}
