import gsap from 'gsap';
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { projects } from './projects.json';
import { Link } from 'react-router-dom';

import './Projects.scss';

type ProjectsProps = {
  sectionRef: RefObject<HTMLElement>;
};

export default function Projects({ sectionRef }: ProjectsProps) {
  const [packageData, setPackageData] = useState<{ downloads?: number } | null>(
    null
  );
  const projectElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    fetch('https://api.npmjs.org/downloads/point/last-year/jd-react-select')
      .then((response) => response.json())
      .then((data) => setPackageData(data))
      .catch((error) => console.error(error));
  }, []);

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isAnyProjectHovered, setIsAnyProjectHovered] = useState(false);

  const handleProjectHover = (index: number) => {
    setHoveredProject(index);
    setIsAnyProjectHovered(true);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
    setIsAnyProjectHovered(false);
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    // Use sectionElement for calculations or manipulations
  }, [sectionRef]);

  useLayoutEffect(() => {
    projectElements.current.forEach((project, index) => {
      gsap.from(project, {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: index * 0.1,
        ease: "power4.out", // add an easing function for a smoother animation
      });
    });
  }, []);

  return (
    <section className="projects" id="projects">
      {isAnyProjectHovered && <div className="overlay"></div>}
      {projects.map((project, i) => (
        <Link
          to={project.link}
          className={`project ${hoveredProject === i ? 'hovered' : ''}`}
          onMouseEnter={() => handleProjectHover(i)}
          onMouseLeave={handleProjectLeave}
          ref={(el) => (projectElements.current[i] = el)}
          key={i}
        >
          {isAnyProjectHovered && hoveredProject !== i && (
            <div className="overlay"></div>
          )}
          <div className="project-content">
            <p className="project-build">{project.build}</p>
            <h1 className="project-name">{project.name}</h1>
            <p className="project-description">{project.desc}</p>
            <div className="project-links">
              {project.npm && (
                <div className="package-downloads">
                  <span>Package Downloads: </span>
                  <p>{packageData && packageData.downloads}</p>
                </div>
              )}
            </div>


            {/* <div className="project-links">
              
              <a href={project.site} target="_blank">View Site</a>
              {!project.npm && <a href={project.repo} target="_blank">Source Code</a>}
            </div> */}
          </div>
        </Link>
      ))}
    </section>
  );
}