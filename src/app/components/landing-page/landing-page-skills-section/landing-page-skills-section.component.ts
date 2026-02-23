import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../data/skills.data';

@Component({
  selector: 'app-landing-page-skills-section',
  imports: [],
  templateUrl: './landing-page-skills-section.component.html',
  styleUrl: './landing-page-skills-section.component.scss'
})
export class LandingPageSkillsSectionComponent {
  categories = SKILL_CATEGORIES;
}
