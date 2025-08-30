export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
}

export interface Client {
  name: string;
  logo: string;
}

export interface Feature {
  title: string;
  description: string;
  benefits: string[];
}
