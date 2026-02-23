export interface CandidateStat {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface CandidateProfile {
  data: {
    name: string;
    dateOfBirth: string;
    nationality: string;
    profilePhoto: string;
    email: string;
    phone: string;
    linkedIn: string;
    address: string;
    intro: string;
    roles: string[];
    stats: CandidateStat[];
    socials: SocialLink[];
  };
  ui: {
  };
}
