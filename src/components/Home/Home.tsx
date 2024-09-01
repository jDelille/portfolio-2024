import React from "react";
import Navbar from "../Navbar/Navbar";
import { ExternalIcon, GithubIcon, LinkedinIcon } from "../../icons";
import "./Home.scss";

type HomeProps = {
  onSetActiveLink: (link: string) => void;
  activeLink: string;
};

const Home: React.FC<HomeProps> = ({onSetActiveLink, activeLink}) => {
  return (
    <section className="home">
      <h1>Justin Delille</h1>
      <h2>Front-End Web Developer</h2>
      <p className="bio">
        I like to build interactive websites using React and TypeScript, solve
        problems with code, and learn about new technologies. View my work,
        experience, and learn more about who I am. If you like what you see,
        let's get in touch and make some magic happen.
      </p>

      <Navbar onSetActiveLink={onSetActiveLink} activeLink={activeLink} />

      <div className="extra-content">
        <img src="../images/me.jpg" alt="" />
        <a
          href="https://www.linkedin.com/in/justin-delille/"
          target="_blank"
          className="linkedin"
        >
          <LinkedinIcon />
          <p>Linkedin</p>
          <ExternalIcon />
        </a>
        <a
          href="https://github.com/jDelille"
          target="_blank"
          className="github"
        >
          <GithubIcon />
          <p>Github</p>
          <ExternalIcon />
        </a>
      </div>
    </section>
  );
};

export default Home;
