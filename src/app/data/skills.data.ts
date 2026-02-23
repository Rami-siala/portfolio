import { SkillCategory } from '../models/skill-category.model';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    data: {
      name: 'Frontend',
      skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'RxJS', 'SCSS'],
    },
    ui: {
      icon: 'layout',
      accent: 'indigo',
    },
  },
  {
    data: {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    },
    ui: {
      icon: 'server',
      accent: 'emerald',
    },
  },
  {
    data: {
      name: 'AI & Data',
      skills: ['TensorFlow', 'Machine Learning', 'NLP', 'Data Analysis', 'Pandas', 'Jupyter'],
    },
    ui: {
      icon: 'brain',
      accent: 'violet',
    },
  },
  {
    data: {
      name: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Linux', 'CI/CD', 'VS Code', 'Figma'],
    },
    ui: {
      icon: 'tool',
      accent: 'amber',
    },
  },
];
