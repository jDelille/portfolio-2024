import React, { useLayoutEffect, useRef, useState } from "react";
import { projects } from '../Projects/projects.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Select } from 'jd-react-select';
import '@/../jd-react-select/dist/components/Select.css';
import { SelectOption } from '@/../jd-react-select/dist/components/Select';
import { createDescriptionAnimation, createImageAnimation, createScrollTrigger } from "../Animations/Animations";
import './ProjectDetails.scss';

type ProjectDetailsProps = {
 index: number;
 app: React.RefObject<HTMLElement>
};


// showcase
const options = [
 { label: 'First', value: 1 },
 { label: 'Second', value: 2 },
 { label: 'Third', value: 3 },
];

export default function ProjectDetails({ index, app }: ProjectDetailsProps) {

 const purposeRef = useRef(null);
 const imageRef = useRef(null);

 const project = projects[index];
 const {
  projectBuild,
  projectImageLarge,
  projectPurpose,
  npm,
 } = project;

 useLayoutEffect(() => {

  const descriptionAnimation = createDescriptionAnimation(purposeRef);
  const descriptionTimeline = gsap.timeline();
  descriptionTimeline.add(descriptionAnimation);
  createScrollTrigger(purposeRef, descriptionTimeline, 'top bottom-=150px');

  const imageAnimation = createImageAnimation(imageRef);
  const imageTimeline = gsap.timeline();
  imageTimeline.add(imageAnimation);
  createScrollTrigger(imageRef, imageTimeline, 'top bottom-=150px');

  ScrollTrigger.refresh();
 }, []);


 const [value, setValue] = useState<SelectOption | undefined>(options[0]);


 return <div className='project-details'>
  <div className='detail-wrapper'>
   <div className='text'>
    <div className='purpose' ref={purposeRef}>
     <h2>Purpose</h2>
     <p>{projectPurpose}</p>
    </div>
    <div className='build' ref={purposeRef}>
     <h2>Build</h2>
     <p>{projectBuild}</p>
    </div>
   </div>

   {npm ? (
    <div className='showcase'>
     <div className='select-wrapper'>
      <p>Try it out!</p>
      <Select
       // multiple
       options={options}
       value={value}
       onChange={(value) => setValue(value)}
      />
     </div>
    </div>
   ) : (
    <div className='site-images'>
     <img src={projectImageLarge} alt='' ref={imageRef} />
    </div>
   )}
  </div>
 </div>
}
