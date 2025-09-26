import React from 'react';
import type { EducationItem, Skill, Project, Experience, Certification, Achievement, Position, CodingProfile } from './types';

export const PROFILE_PHOTO_BASE64 = "profile.jpg";

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Technology",
    institution: "Shri Vishnu Engineering College For Women, Bhimavarm",
    details: "CSE",
    period: "2022 - 2026",
    score: "CGPA - 9.18/10",
  },
  {
    degree: "Intermediate",
    institution: "SASI Junior College for Girls, Velivennu",
    details: "",
    period: "2020 - 2022",
    score: "Percentage: 97%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Montessori (EM) High School, Tanuku",
    details: "",
    period: "2019 - 2020",
    score: "Percentage: 96%",
  },
];

export const SKILLS_DATA: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C", "Python"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS"],
  },
  {
    category: "Core CS Subjects",
    items: ["DSA", "DBMS", "OS"],
  },
  {
    category: "Soft Skills",
    items: ["Self-Motivated", "Team Collaboration", "Time Management", "Problem Solving"],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Recipedia",
    role: "Frontend Developer",
    description: "Full-stack recipe-sharing web application that allows users to browse and upload recipes, search and filter by type or cuisine, discover random suggestions, watch embedded cooking videos, and interact through comments and feedback.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/ValliGayathri/Recipedia",
  },
  {
    title: "X-Perio Detect",
    role: "ML Model Developer",
    description: "A deep learning desktop application that classifies dental X-ray images into Mild, Moderate, or Severe periodontitis, allowing users to upload X-rays, predict disease severity, and ensure accurate results by avoiding non-X-ray inputs.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    githubUrl: "https://github.com/ValliGayathri/X-PerioDetect",
  },
  {
    title: "Campus Event Hub",
    role: "Frontend Developer, Database Designer",
    description: "A web application that simplifies campus event management with role-based access for students, coordinators, and faculty, enabling event registration, tracking, announcements, and secure login.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/ValliGayathri/CampusEventHub",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    role: "AI & ML Intern",
    company: "SmartBridge & APSCHE (Virtual)",
    period: "May - Jul 2025",
    projectName: "GrainPalette - Rice Type Classification",
    projectRole: "ML Model Developer",
    description: "Built a CNN-based model to classify rice varieties based on visual features with an accuracy of 98%, and deployed it as an interactive Streamlit web app for real-time image uploads and predictions.",
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: "Introduction to Cloud Computing",
    issuer: "Simplilearn",
    date: "Jul, 2025",
  },
  {
    name: "Basics of Machine Learning",
    issuer: "Great Learning",
    date: "Sep, 2023",
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
    { description: "Selected for KBR KRIYA Immersion – Among 2000+ nationwide for sustainability solutions", year: "2025" },
    { description: "Diamond Smart Coder, Smart Interviews – Ranked 450 out of 42,466+ participants", year: "2025" },
    { description: "Ranked 154 in Junior Coding Olympiad, Newton School of Technology", year: "2024" },
];

export const POSITIONS_DATA: Position[] = [
    { role: "Mentor at Smart Interviews" },
    { role: "Student Coordinator of Organic Farmerettes" },
];

export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.76a11.024 11.024 0 006.255 6.255l.76-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" /></svg>
);

export const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
);

export const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.022 1.825-2.022 1.825-2.022s1.825.001 1.825 2.022v8.399h4.988v-10.131c0-4.87-3.068-5.062-4.787-5.062-1.958 0-3.828 1.391-3.828 1.391v-1.198z"/></svg>
);

export const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

const CodeIcon = ({ path }: { path: string }) => <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg"><title>CodeChef</title><path d={path} fill="currentColor" /></svg>;

export const CODING_PROFILES_DATA: CodingProfile[] = [
    { name: "CodeChef", url: "https://www.codechef.com/users/valli_gayathri", icon: <CodeIcon path="M22.39,9.83h-3.3V0h-3.3V9.83h-3.3v3.3h3.3v8.17h3.3V13.13h3.3V9.83Z M8.19,21.33H4.89V13.13H1.59V9.83H4.89V0H8.19V9.83h3.3v3.3h-3.3v8.2Z" /> },
    { name: "Codeforces", url: "https://codeforces.com/profile/valli_gayathri", icon: <CodeIcon path="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-9zM12 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" /> },
    { name: "Leetcode", url: "https://leetcode.com/u/valligayathrimullapudi/", icon: <CodeIcon path="M13.48 4.26a1.67 1.67 0 0 0-1.58-1.26h-1.8a1.67 1.67 0 0 0-1.58 1.26L4 16.52A1.67 1.67 0 0 0 5.58 18.8h12.84a1.67 1.67 0 0 0 1.58-2.28L13.48 4.26zM9.82 13.54H7.95l1.87-3.74h1.87zm4.23 0h-1.87l1.87-3.74h1.87z" /> },
    { name: "SmartInterviews", url: "https://smartinterviews.in/profile/valli_gayathri", icon: <CodeIcon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 12v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /> },
];