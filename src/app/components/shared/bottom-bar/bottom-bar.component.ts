import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CANDIDATE_PROFILE } from '../../../data/candidate-profile.data';

@Component({
  selector: 'app-bottom-bar',
  imports: [],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {
  private sanitizer = inject(DomSanitizer);
  profile = CANDIDATE_PROFILE;
  currentYear = new Date().getFullYear();

  safeIcon(icon: string) {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon}</svg>`
    );
  }
}
