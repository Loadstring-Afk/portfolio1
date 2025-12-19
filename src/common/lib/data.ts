import React from 'react';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
] as const;

export const experiencesData = [
  {
    title: 'Trustsoft s.r.o.',
    location: 'Prague, Czechia',
    description:
      'Front-end Developer. Providing services in IT, cloud services, information systems and software development.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2024 - Present',
  },
  {
    title: 'Granton s.r.o.',
    location: 'Prague, Czechia',
    description:
      'Front-end Developer. Delivering flawless UI/UX, frontend architecture & workflows.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Oct 2024 - Present',
  },
  {
    title: 'WhirrCrew s.r.o.',
    location: 'Prague, Czechia',
    description:
      'Front-end Developer. Building accessible, interactive interfaces with AI integrations.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jun 2024 - Present',
  },
  {
    title: 'NAU',
    location: 'Kyiv, Ukraine',
    description: `Bachelor's degree in Cybersecurity.`,
    icon: React.createElement(BookIcon),
    date: 'Sep 2022 - Jun 2024',
  },
] as const;

/* 🗿 ALFA MOVE */
export const projectsData = [
  {
    title: 'No Projects',
    description: 'I deleted all my projects cuz im alfa :v',
    tags: [],
    imageUrl: null,
    link: '',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Python', '/svgs/python.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['SCSS', '/svgs/Sass.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['GitHub', '/svgs/github.svg'],
] as const;