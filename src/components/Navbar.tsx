'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="container">
        <Link href="/" passHref>
          <div className="logo">
            <Image
              src="/logo.png"
              alt="Logo"
              width={240}
              height={180}
              className="logo-image"
            />
          </div>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '≡'}
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about" onClick={toggleMenu}>About</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
        <nav className="desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
