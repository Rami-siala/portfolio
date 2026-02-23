import { Component, inject, output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CANDIDATE_PROFILE } from '../../../data/candidate-profile.data';
import { MENU_SECTIONS } from '../../../data/menu.data';

@Component({
  selector: 'app-landing-page-footer-section',
  imports: [],
  templateUrl: './landing-page-footer-section.component.html',
  styleUrl: './landing-page-footer-section.component.scss'
})
export class LandingPageFooterSectionComponent {
  private sanitizer = inject(DomSanitizer);
  profile = CANDIDATE_PROFILE;
  currentYear = new Date().getFullYear();
  navigateTo = output<string>();

  navLinks = MENU_SECTIONS;

  safeIcon(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>`
    );
  }
}
