// All page content lives in /content/*.json and is editable through /admin (Sveltia CMS).
// This module only declares types and re-exports the data.
import profileData from "../../content/profile.json";
import newsData from "../../content/news.json";
import educationData from "../../content/education.json";
import publicationsData from "../../content/publications.json";
import projectsData from "../../content/projects.json";
import awardsData from "../../content/awards.json";

export type ProfileLink = { label: string; url: string };

export type Profile = {
  name: string;
  nameKo?: string;
  role: string;
  affiliation: string;
  affiliationUrl?: string;
  photo: string;
  greeting?: string;
  bio: string;
  email: string;
  cv?: string;
  researchInterests: string[];
  links: ProfileLink[];
};

export type NewsItem = { date: string; text: string };

export type EducationItem = {
  degree: string;
  institution: string;
  detail?: string;
  period: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  category: string;
  year: number;
  date?: string;
  link?: string;
  selected?: boolean;
};

export type Project = {
  title: string;
  role?: string;
  organization?: string;
  period?: string;
  summary?: string;
};

export type Award = { date: string; title: string; organization?: string };

export const profile: Profile = profileData;
export const news: NewsItem[] = newsData.items;
export const education: EducationItem[] = educationData.items;
export const publications: Publication[] = publicationsData.items;
export const projects: Project[] = projectsData.items;
export const awards: Award[] = awardsData.items;

/** Author list with the site owner's name emphasised. */
export const OWNER_NAME = profileData.name;
