import React from 'react';

/* ------------------ NAV LINKS ------------------ */
export const links = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
] as const;

export const experiencesData = [
  {
    title: 'ALFA MODE',
    location: '',
    description: 'i delete all my experience cuz im alfa :v',
    icon: null,
    date: '',
  },
] as const;


/* ------------------ SKILLS ------------------ */
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