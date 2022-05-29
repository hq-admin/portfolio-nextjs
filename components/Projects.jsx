import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I’ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='K-W Electronics'
            backgroundImg='/assets/projects/kw.png'
            projectUrl='/kw'
            tech='React | React Context | Firebase | Stripe'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg='/assets/projects/weather.png'
            projectUrl='/weather'
            tech='HTML | CSS | NodeJS | MapBox | Weatherstack'
          />
          <ProjectItem
            title='Tesla Electronics'
            backgroundImg='/assets/projects/tesla.png'
            projectUrl='/tesla'
            tech='React JS | Redux | MongoDB | Styled components | Material UI'
          />
          <ProjectItem
            title='Tesla Electronics - Admin panel'
            backgroundImg='/assets/projects/tesla-admin.png'
            projectUrl='/teslaAdmin'
            tech='React JS | Redux | MongoDB | JWT | Styled components | Material UI'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
