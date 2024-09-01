
import { RefObject, useEffect } from 'react';
import External from '../../icons/External';
import ResumeIcon from '../../icons/ResumeIcon';
import './About.scss';

type AboutProps = {
 sectionRef: RefObject<HTMLElement>;
}
export default function About({ sectionRef }: AboutProps) {
 useEffect(() => {
  const sectionElement = sectionRef.current;
  // Use sectionElement for calculations or manipulations
 }, [sectionRef]);
 return <section className='about' id="about">
  <h1>About Me</h1>
  <div className="about-me">
   <p>Hey, I'm Justin. I love coding, creating websites, and learning new technolgies to make myself a better, more efficient developer. My passion for web development started in college at Arizona State University where I studied computer science. I decided to take my skills to the next level by enrolling in a Full Stack Web Development bootcamp called DevMountain. I then worked with an amazing company called 808 Partners where my skills and passion as a developer sky rocketed.</p>
   <p>Right now, my go to technologies to work with are <span>React, Next.js, TypeScript, JavaScript, SCSS, Prisma, and Firebase.</span> I'm a firm believer that TypeScript is the future of web development and have been poishing my skills with it to become a more robust developer. To test my TypeScript skills in React, I decided to create a reusable component that I published as an NPM which currently has over 700 downloads. </p>
  </div>
  <div className="skills-container">
   <h1>Skills</h1>
   <div className="skills">
    <p>React</p>
    <p>TypeScript</p>
    <p>Next.js</p>
    <p>SCSS</p>
    <p>API</p>
    <p>NoSQL</p>
    <p>Redux</p>
    <p>MobX</p>
    <p>Prisma</p>
    <p>Figma</p>
    <p>Jira</p>
    <p>Git</p>
   </div>
  </div>

  <div className="experience-container">
   <h1>Experience</h1>
   <div className="experience">
    <h3>808 Partners - <span>Front-End Developer</span></h3>
    <p>At 808 Partners I worked on a small team creating a social platform built for financial communities called Muunifi. The technology used to develop the site was Next.js, React, TypeScript, MobX, and Firebase. My experience here greatly helped me learn how to write better code and learn how to work well with other developers, project managers, and designers.  </p>
   </div>
   <div className="experience">
    <h3>DevMountain - <span>Full Stack Developer</span></h3>
    <p>At DevMountain, I learned the industries best practices for working on the front-end and the back-end. The technologies used were mainly React, Javascript, and NoSQL Databases, but I also worked with Python and SQL Databases. Besides learning to write better code, I also learned how to pair-program with other developers and how to mentor other developers. </p>
   </div>
  </div>
 </section>;
}
