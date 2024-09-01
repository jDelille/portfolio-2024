import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { projects } from '../components/Projects/projects.json';
import Loader from '../components/Loader/Loader';
import ArrowIcon from '../icons/ArrowIcon';
import Footer from '../components/Footer/Footer';
import ProjectDescription from '../components/ProjectDescription/ProjectDescription';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import ProjectHero from '../components/ProjectHero/ProjectHero';
import gsap from 'gsap';
import $ from 'jquery';

import './Project.scss';
import ResumeIcon from '../icons/ResumeIcon';
gsap.registerPlugin(ScrollTrigger);

type ProjectProps = {
 index: number;
};

export default function Project({ index }: ProjectProps) {
 const appRef = useRef<HTMLDivElement>(null);

 const project = projects[index];
 const { projectColor, nextProject, nextProjectLink, nextIsNPM } = project;

 // function for next-container onclick animation for mobile devices.
 useEffect(() => {
  window.scrollTo(0, 0);

  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
   $('.next-work-container').on('click', function (e) {
    e.preventDefault();
    var $container = $(this);
    var $after = $container.find('::after');

    $after.css('opacity', '1');
    setTimeout(function () {
     const href = $container.attr('href');
     if (href !== undefined) {
      window.location.href = href.toString();
     }
    }, 1000);
   });
  }
 }, []);

 return (
  <>
   <Loader backgroundColor={projectColor} />
   <div className='project' ref={appRef}>
    <nav className='nav'>
     <div className='nav-wrapper'>
      <Link to='/'>Back home </Link>
      {/* <p className='resume'>
       View my resume
       <a
        href='https://docs.google.com/document/d/1AGPHOLiB3M8XwYzwolbal55d3XLsWpNo67Sf6_J55s8'
        target='_blank'>
        <ResumeIcon />
       </a>
      </p> */}
     </div>
    </nav>
    <ProjectHero index={index} app={appRef} />
    <ProjectDescription index={index} app={appRef} />
    <ProjectDetails index={index} app={appRef} />
    <a href={nextProjectLink} className='next-work-container'>
     <div className='wrapper'>
      <div className='text'>
       <p className='label'>Next Work</p>
       <p className={nextIsNPM ? 'project-link-npm' : 'project-link'}>
        {nextProject}
       </p>
      </div>
      <div className='arrow'>
       <ArrowIcon />
      </div>
     </div>
    </a>
    <Footer />
   </div>
  </>
 );
}
