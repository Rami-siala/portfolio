import { Component, ElementRef, viewChild, AfterViewInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageMenuComponent } from '../landing-page-menu/landing-page-menu.component';
import { LandingPageHeroSectionComponent } from '../landing-page-hero-section/landing-page-hero-section.component';
import { LandingPageProjectsSectionComponent } from '../landing-page-projects-section/landing-page-projects-section.component';
import { LandingPageSkillsSectionComponent } from '../landing-page-skills-section/landing-page-skills-section.component';
import { LandingPageCertsSectionComponent } from '../landing-page-certs-section/landing-page-certs-section.component';
import { LandingPageFooterSectionComponent } from '../landing-page-footer-section/landing-page-footer-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    LandingPageMenuComponent,
    LandingPageHeroSectionComponent,
    LandingPageProjectsSectionComponent,
    LandingPageSkillsSectionComponent,
    LandingPageCertsSectionComponent,
    LandingPageFooterSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  container = viewChild<ElementRef>('scrollContainer');
  currentSection = signal(0);
  activeSectionName = signal('home');

  sections = ['home', 'projects', 'skills', 'certs'];

  ngAfterViewInit() {
    const el = this.container()?.nativeElement;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = this.sections.indexOf(entry.target.id);
            if (idx !== -1) {
              this.currentSection.set(idx);
              this.activeSectionName.set(this.sections[idx]);
            }
          }
        });
      },
      { root: el, threshold: 0.5 }
    );

    this.sections.forEach(id => {
      const section = el.querySelector(`#${id}`);
      if (section) observer.observe(section);
    });

    this.route.queryParams.subscribe(params => {
      const section = params['section'];
      if (section && this.sections.includes(section)) {
        setTimeout(() => this.navigateToSection(section));
      }
    });
  }

  navigateToSection(sectionId: string) {
    const idx = this.sections.indexOf(sectionId);
    if (idx !== -1) {
      this.currentSection.set(idx);
      this.activeSectionName.set(sectionId);
    }
    const el = this.container()?.nativeElement;
    if (!el) return;
    const target = el.querySelector(`#${sectionId}`) as HTMLElement;
    if (target) {
      el.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
