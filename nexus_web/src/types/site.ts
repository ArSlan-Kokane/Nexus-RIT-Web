export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  whatsapp?: string;
  email?: string;
  youtube?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  institution: {
    name: string;
    shortName: string;
    campus: string;
    city: string;
    state: string;
    address: string;
  };
  contact: {
    email: string;
    facultyCoordinator?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
    whatsappCommunity?: string;
  };
  recruitment: {
    isOpen: boolean;
    googleFormUrl: string;
    deadline?: string;
  };
  navItems: NavItem[];
}
