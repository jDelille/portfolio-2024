import { useNavigate } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {

 const navigate = useNavigate();

 const handleProjectsClick = () => {
  navigate('/#projects');
  const contactContainer = document.getElementById('contact');
  if (contactContainer) {
   contactContainer.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const handleAboutClick = () => {
  navigate('/#projects');
  const contactContainer = document.getElementById('contact');
  if (contactContainer) {
   contactContainer.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const handleContactClick = () => {
  navigate('/#projects');
  const contactContainer = document.getElementById('contact');
  if (contactContainer) {
   contactContainer.scrollIntoView({ behavior: 'smooth' });
  }
 };

 const scrollToTop = () => {
  window.scrollTo(0, 0);
 }

 return <footer>
  <div className="footer-content">
   <h2> Justin Delille</h2>
   <div className="links">
    <a
     href='#projects'
     onClick={handleProjectsClick}
     className='site-link'>
     My Projects
    </a>
    <a
     href='#about'
     onClick={handleAboutClick}
     className='site-link'>
     About Me
    </a>
    <a
     href='#contact'
     onClick={handleContactClick}
     className='site-link'>
     Contact Me
    </a>
    <a
     href='https://www.linkedin.com/in/justin-delille/' target="_blank"
     className='site-link'>
     Linkedin
    </a>
    <a
     href='https://github.com/jDelille'
     target='_blank'
     className='site-link'>
     Github
    </a>
   </div>
   <div className="copyright">
    ©  2023 Justin Delille - Scottsdale, AZ
   </div>
   <div className="scroll-to-top">
    <p onClick={scrollToTop}>Scroll to top</p>
   </div>
  </div>
 </footer>
}
