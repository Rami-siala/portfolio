export interface Certification {
  data: {
    slug: string;
    title: string;
    abbreviation?: string;
    programName?: string;
    recipientName: string;
    issuer: string;
    issuerWebsite?: string;
    issuerEmail?: string;
    issueDate: string;
    certificateId: string;
    verificationUrl?: string;
    courseHours?: string;
    skills: string[];
    imagePath: string;
    pdfPath?: string;
  };
  ui: {
    color: string;
  };
}
