import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { animate } from '../Animations/Animations';
import { projects } from '../Projects/projects.json';
import './ProjectHero.scss';


type ProjectHeroProps = {
 index: number;
 app: React.RefObject<HTMLElement>
};

export default function ProjectHero({ index, app }: ProjectHeroProps) {
 const heroRef = useRef(null);
 const nameRef = useRef(null);
 const bioRef = useRef(null);
 const laptopRef = useRef(null);
 const infoRef = useRef(null);

 const project = projects[index];
 const {
  projectName,
  projectBio,
  projectImageSmall,
  projectColor,
  projectRole,
  projectContext,
  projectPeriod,
  npm
 } = project;

 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   animate(app, heroRef, nameRef, bioRef, laptopRef, infoRef);
  }, app);
  return () => ctx.revert();
 }, []);


 return (
  <div className='project-hero' ref={heroRef}>
   <div className='hero-content'>
    <div className='text'>
     <h1 className={npm ? 'npm-title' : 'project-name'} ref={nameRef}>{projectName}</h1>
     <p className='project-brief' ref={bioRef}>{projectBio}</p>
    </div>

    <div className='image'>
     <img src={projectImageSmall} alt='' className='laptop' ref={laptopRef} />
    </div>

    <div className='project-info' >
     <div className='info-wrapper' ref={infoRef}>
      <p className='info-one'>
       <span style={{ color: projectColor }}>Role</span>
       {projectRole}
      </p>
      <p className='info-two'>
       <span style={{ color: projectColor }}>Context</span>
       {projectContext}
      </p>
      <p className='info-three'>
       <span style={{ color: projectColor }}>Period</span>
       {projectPeriod}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}
