import { Component, signal } from '@angular/core';
import { Project } from '../../../models/project.model';
import { PROJECTS, PROJECT_FILTERS, PROJECT_FILTER_MAP } from '../../../data/projects.data';

@Component({
  selector: 'app-landing-page-projects-section',
  imports: [],
  templateUrl: './landing-page-projects-section.component.html',
  styleUrl: './landing-page-projects-section.component.scss'
})
export class LandingPageProjectsSectionComponent {
  activeFilter = signal('all');
  projects = PROJECTS;
  filters = PROJECT_FILTERS;

  get filteredProjects(): Project[] {
    if (this.activeFilter() === 'all') return this.projects;
    const tags = PROJECT_FILTER_MAP[this.activeFilter()] || [];
    return this.projects.filter(p => p.data.tags.some(t => tags.includes(t)));
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
