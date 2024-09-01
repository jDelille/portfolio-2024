import React, { useEffect, useMemo, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import './Navbar.scss';

type NavbarProps = {
 onSetActiveLink: (link: string) => void;
 activeLink: string;
};

export default function Navbar({ onSetActiveLink, activeLink }: NavbarProps) {


 const sectionIds = useMemo(() => ['projects', 'about', 'contact'], []);
 const [scrollEnabled, setScrollEnabled] = useState(true);

 useEffect(() => {
  const handleScroll = () => {
   if (scrollEnabled) {
    const currentSection = sectionIds.find((id) => {
     const section = document.getElementById(id);
     if (section) {
      const rect = section.getBoundingClientRect();
      return (
       rect.top <= window.innerHeight / 2 &&
       rect.bottom >= window.innerHeight / 2
      );
     }
     return false;
    });
    if (currentSection) {
     onSetActiveLink(currentSection);
    }
   }
  };

  const cleanup = () => {
   window.removeEventListener('scroll', handleScroll);
  };

  window.addEventListener('scroll', handleScroll);
  return cleanup;
 }, [sectionIds, onSetActiveLink, scrollEnabled]);

 const handleNavClick = (link: string) => {
  setScrollEnabled(false); // Disable scroll on nav click
  onSetActiveLink(link);
  setTimeout(() => setScrollEnabled(true), 1000); // Enable scroll after 1 second delay
 };
 return (
  <Scrollspy items={sectionIds} currentClassName='is-active'>
   <nav className='navbar'>
    <ul>
     <li
      className={
       activeLink === 'projects' ? 'active-nav-link' : 'nav-link'
      }
      onClick={() => {
       onSetActiveLink('projects');
       handleNavClick('projects');
      }}>
      <span className='number'>01</span>

      <a href='#projects'>
       <span
        className={
         activeLink === 'projects' ? 'extended-line' : 'short-line'
        }></span>
       Projects
      </a>
     </li>
     <li
      className={activeLink === 'about' ? 'active-nav-link' : 'nav-link'}
      onClick={() => {
       onSetActiveLink('about');
       handleNavClick('about');
      }}>
      <span className='number'>02</span>

      <a href='#about'>
       <span
        className={
         activeLink === 'about' ? 'extended-line' : 'short-line'
        }></span>
       About
      </a>
     </li>
     <li
      className={
       activeLink === 'contact' ? 'active-nav-link' : 'nav-link'
      }
      onClick={() => {
       onSetActiveLink('contact');
       handleNavClick('contact');
      }}>
      <span className='number'>03</span>

      <a href='#contact'>
       <span
        className={
         activeLink === 'contact' ? 'extended-line' : 'short-line'
        }></span>
       Contact
      </a>
     </li>
    </ul>
   </nav>
  </Scrollspy>
 );
}
