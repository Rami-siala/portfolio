import { Certification } from '../models/certification.model';

export const CERTIFICATIONS: Certification[] = [
  {
    data: {
      slug: 'aws-cloud-foundations',
      title: 'AWS Academy Graduate - Cloud Foundations',
      programName: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
      recipientName: 'Ramy Siala',
      issuer: 'AWS Academy',
      issueDate: '02/16/2026',
      certificateId: '',
      verificationUrl: 'https://www.credly.com/go/7m0dcl8o',
      courseHours: '20 hours',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture'],
      imagePath: 'certs/aws_academy_graduate-cloud_foundations-training_badge-AWS.png',
      pdfPath: 'certs/aws_academy_graduate-cloud_foundations-training_badge-AWS.pdf',
    },
    ui: {
      color: 'amber',
    },
  },
  {
    data: {
      slug: 'kanban-essentials',
      title: 'Kanban Essentials Certified',
      abbreviation: 'KEC',
      recipientName: 'Rami Siala',
      issuer: 'Kanbanstudy',
      issuerWebsite: 'www.Kanbanstudy.com',
      issuerEmail: 'support@kanbanstudy.com',
      issueDate: 'February 19, 2026',
      certificateId: '1146170',
      skills: ['Kanban', 'Agile', 'Project Management'],
      imagePath: 'certs/kanban_essentials_with_ai-KEC.png',
      pdfPath: 'certs/kanban_essentials_with_ai-KEC.pdf',
    },
    ui: {
      color: 'blue',
    },
  },
  {
    data: {
      slug: 'python-it-specialist',
      title: 'Information Technology Specialist - Python',
      recipientName: 'Siala Ramy',
      issuer: 'Certiport (Pearson VUE)',
      issuerWebsite: 'verify.certiport.com',
      issueDate: 'October 18, 2024',
      certificateId: 'dFbX-uT6C',
      verificationUrl: 'https://verify.certiport.com',
      skills: ['Python', 'Programming', 'IT Fundamentals'],
      imagePath: 'certs/python_information_technology_specialist-CERTIPORT.jpeg',
    },
    ui: {
      color: 'emerald',
    },
  },
  {
    data: {
      slug: 'scrum-devops-fundamentals',
      title: 'Scrum for Operations & DevOps Fundamentals Certified',
      abbreviation: 'SODFC',
      recipientName: 'Rami Siala',
      issuer: 'SCRUMstudy',
      issuerWebsite: 'www.SCRUMstudy.com',
      issuerEmail: 'support@scrumstudy.com',
      issueDate: 'February 6, 2026',
      certificateId: '1143905',
      skills: ['Scrum', 'DevOps', 'Agile Operations'],
      imagePath: 'certs/scrum_for_operations_n_devops-SODFC.png',
      pdfPath: 'certs/scrum_for_operations_n_devops-SODFC.pdf',
    },
    ui: {
      color: 'violet',
    },
  },
  {
    data: {
      slug: 'scrum-fundamentals',
      title: 'Scrum Fundamentals Certified',
      abbreviation: 'SFC',
      recipientName: 'Rami Siala',
      issuer: 'SCRUMstudy',
      issuerWebsite: 'www.SCRUMstudy.com',
      issuerEmail: 'support@scrumstudy.com',
      issueDate: 'February 5, 2026',
      certificateId: '1143761',
      skills: ['Scrum', 'Agile', 'Project Management'],
      imagePath: 'certs/scrum_fundamentals-SFC.png',
      pdfPath: 'certs/scrum_fundamentals-SFC.pdf',
    },
    ui: {
      color: 'indigo',
    },
  },
];
