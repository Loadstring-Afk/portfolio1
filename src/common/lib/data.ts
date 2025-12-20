import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';

import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
] as const;

/* =======================
   EXPERIENCES
   Started May 2023
   Mostly Mexico, 1 California
======================= */

export const experiencesData = [
  {
    title: 'Front-end Developer',
    location: 'Mexico',
    description:
      'Front-end Developer working with modern React and TypeScript stacks. Focused on clean UI, reusable components, and performance.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'May 2023 - Dec 2023',
  },
  {
    title: 'Front-end Developer',
    location: 'Mexico',
    description:
      'Developed responsive interfaces, integrated APIs, and improved frontend workflows using modern tooling.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jan 2024 - Jun 2024',
  },
  {
    title: 'Front-end Developer',
    location: 'California, USA',
    description:
      'Remote collaboration on production applications, focusing on UI/UX quality and scalable frontend architecture.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2024 - Oct 2024',
  },
  {
    title: 'Front-end Developer',
    location: 'Mexico',
    description:
      'Currently working on advanced frontend systems, improving performance, design systems, and developer experience.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Nov 2024 - Present',
  },
] as const;

/* =======================
   IMAGES
======================= */

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

/* =======================
   PROJECTS
   (INTENTIONALLY EMPTY)
======================= */

export const projectsData = [] as const;

export const projectsNote =
  "No projects cuz I always delete them — they're useless LOL :3";

/* =======================
   SKILLS
======================= */

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Golang', '/svgs/golang.svg'],
  ['Docker', '/svgs/Docker.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;