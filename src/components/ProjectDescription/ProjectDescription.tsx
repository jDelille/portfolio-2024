import React, { useLayoutEffect, useRef } from 'react';
import {
 createParagraphAnimation,
 createScrollTrigger,
 createTitleAnimation,
} from '../Animations/Animations';
import { projects } from '../Projects/projects.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';

import './ProjectDescription.scss';

type ProjectDescriptionProps = {
 index: number;
 app: React.RefObject<HTMLElement>;
};

export default function ProjectDescription({
 index,
 app,
}: ProjectDescriptionProps) {
 const titleRef = useRef(null);
 const paragraphRef = useRef(null);
 const buttonRef = useRef(null);

 const navigate = useNavigate();

 const handleNoLinkClick = () => {
  navigate('/#contact');
  const contactContainer = document.getElementById('contact');
  if (contactContainer) {
   contactContainer.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const project = projects[index];
 const {
  projectColor,
  projectBackgroundText,
  projectIntro,
  projectWebsiteLink,
  npm,
 } = project;

 useLayoutEffect(() => {
  const titleAnimation = createTitleAnimation(titleRef);
  const titleTimeline = gsap.timeline();
  titleTimeline.add(titleAnimation);
  createScrollTrigger(titleRef, titleTimeline, 'top bottom-=100px');

  const paragraphAnimation = createTitleAnimation(paragraphRef);
  const paragraphTimeline = gsap.timeline();
  paragraphTimeline.add(paragraphAnimation);
  createScrollTrigger(paragraphRef, paragraphTimeline, 'top bottom-=200px');

  const buttonAnimation = createParagraphAnimation(buttonRef);
  const buttonTimeline = gsap.timeline();
  buttonTimeline.add(buttonAnimation);
  createScrollTrigger(buttonRef, buttonTimeline, 'top bottom-=150px');

  ScrollTrigger.refresh();
 }, []);

 return (
  <div className='project-description' style={{ background: projectColor }}>
   <div className='description-wrapper'>
    <h2 className='background-text'>{projectBackgroundText}</h2>
    <h1 className='intro-text' id='title' ref={titleRef}>
     Introduction
    </h1>
    <p id='paragraph' ref={paragraphRef}>
     {projectIntro}
    </p>
    {projectWebsiteLink ? (
     <a
      href={projectWebsiteLink}
      target='_blank'
      ref={buttonRef}
      className='website-link'>
      {npm ? 'View Documentation' : 'Visit Website'}
     </a>
    ) : (
     <a
      href='#contact'
      onClick={handleNoLinkClick}
      ref={buttonRef}
      className='website-link no-link'>
      Can demo upon request
     </a>
    )}
   </div>
  </div>
 );
}
