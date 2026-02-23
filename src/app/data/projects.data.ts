import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    data: {
      title: 'E-Commerce Platform',
      description: 'A full-stack web application built with Angular and Node.js featuring real-time inventory management and payment integration.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      image: 'images/project-web.svg',
      featured: true,
      link: '#',
    },
    ui: {
    },
  },
  {
    data: {
      title: 'AI Image Classifier',
      description: 'Deep learning model for classifying medical images with 95% accuracy, deployed as a REST API with a modern web interface.',
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      link: '#',
      image: 'images/project-ai.svg',
      featured: true,
    },
    ui: {
    },
  },
  {
    data: {
      title: 'Task Manager App',
      description: 'Cross-platform mobile application with offline-first architecture, real-time sync, and collaborative task management features.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      image: 'images/project-mobile.svg',
      featured: false,
      link: '#',
    },
    ui: {
    },
  },
  {
    data: {
      title: 'REST API Gateway',
      description: 'Microservices API gateway with rate limiting, authentication, caching, and comprehensive logging for distributed systems.',
      tags: ['Spring Boot', 'Docker', 'PostgreSQL'],
      image: 'images/project-api.svg',
      featured: false,
      link: '#',
    },
    ui: {
    },
  },
];

export const PROJECT_FILTERS = ['all', 'web', 'ai', 'mobile'];

export const PROJECT_FILTER_MAP: Record<string, string[]> = {
  web: ['Angular', 'Node.js', 'Spring Boot'],
  ai: ['Python', 'TensorFlow'],
  mobile: ['Flutter', 'Dart'],
};
