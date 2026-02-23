import { Component, input, output, signal } from '@angular/core';
import { MENU_SECTIONS } from '../../../data/menu.data';
import { CANDIDATE_PROFILE } from '../../../data/candidate-profile.data';

@Component({
  selector: 'app-landing-page-menu',
  imports: [],
  templateUrl: './landing-page-menu.component.html',
  styleUrl: './landing-page-menu.component.scss'
})
export class LandingPageMenuComponent {
  navigateTo = output<string>();
  activeSection = input<string>('home');
  mobileMenuOpen = signal(false);
  sections = MENU_SECTIONS;
  profile = CANDIDATE_PROFILE;

  scrollTo(sectionId: string) {
    this.mobileMenuOpen.set(false);
    this.navigateTo.emit(sectionId);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
