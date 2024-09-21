import React from 'react';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

import './Home.css';

const Home = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        <div className="profile-image">
          <div className="image-wrapper">
            <Image
              src="/aleezaa.jpeg"
              alt="Aleeza's profile picture"
              layout="fill"
              objectFit="cover"
              className="profile-pic"
            />
          </div>
        </div>

        <div className="intro">
          <h1 className="intro-heading">Greetings, I'm Aleeza</h1>
          <p className="intro-text">
            I'm passionate about coding with a solid foundation in HTML, CSS, Tailwind CSS, TypeScript, and JavaScript. Currently, I'm diving into Next.js and cloud tech. My journey includes personal projects and continuous learning.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="icon linkedin-icon" />
            </a>
            <a href="https://www.instagram.com/aleeze__1710/#" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="icon instagram-icon" />
            </a>
            <a href="https://x.com/aleeze1710?s=08" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="icon twitter-icon" />
            </a>
            <a href="https://github.com/Aleeze123" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="icon github-icon" />
            </a>
          </div>

          <div className="email-box">
            <MdEmail className="email-icon" size={20} />
            <span className="email-text">alizey649@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
