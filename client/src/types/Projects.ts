export interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  createdAt?: string;
}