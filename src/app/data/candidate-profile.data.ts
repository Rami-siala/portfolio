import { CandidateProfile } from '../models/candidate-profile.model';

export const CANDIDATE_PROFILE: CandidateProfile = {
  data: {
    name: 'Rami Siala',
    dateOfBirth: '02/06/2004',
    nationality: 'Tunisian',
    profilePhoto: 'profile_photo.png',
    email: 'rami.siala.it@gmail.com',
    phone: '(+216) 23318331',
    linkedIn: 'https://www.linkedin.com/in/rami-siala-86258a2b7/',
    address: 'Taniour km5 street Fakhfakh, 3000, Sfax, Tunisia',
    intro:
      'IT student passionate about building modern web applications and exploring ' +
      'the frontiers of Artificial Intelligence. Seeking international academic ' +
      'opportunities to expand my knowledge and impact.',
    roles: ['Web Developer', 'AI Enthusiast', 'Software Engineer', 'Problem Solver'],
    stats: [
      { value: '10+', label: 'Projects' },
      { value: '5+', label: 'Technologies' },
      { value: '2+', label: 'Years Learning' },
    ],
    socials: [
      {
        label: 'GitHub',
        url: 'https://github.com/ramisiala',
        icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rami-siala-86258a2b7/',
        icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
      },
      {
        label: 'Email',
        url: 'mailto:rami.siala.it@gmail.com',
        icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
      },
    ],
  },
  ui: {
  },
};
