import React from "react";
import { useEffect, useRef, useState } from "react";
import { About, Contact, Home, Projects } from "./components/sections";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const [activeLink, setActiveLink] = useState("projects");
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRefs = {
    projects: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = Object.keys(sectionRefs) as Array<
      keyof typeof sectionRefs
    >;

    for (let i = 0; i < sectionIds.length; i++) {
      const sectionId = sectionIds[i];
      const sectionRef = sectionRefs[sectionId];
      if (sectionRef.current) {
        const top = sectionRef.current.offsetTop;
        const bottom = top + sectionRef.current.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveLink(sectionId);
        }
      }
    }
  }, [scrollPosition, sectionRefs]);

  return (
    <div className="App">
      <div className="layout">
        <div className="fixed">
          <Home onSetActiveLink={handleSetActiveLink} activeLink={activeLink} />
        </div>
        <div className="scroll">
          <Projects sectionRef={sectionRefs.projects} />
          <About sectionRef={sectionRefs.about} />
          <Contact sectionRef={sectionRefs.contact} />
        </div>
      </div>
    </div>
  );
};

export default App;
