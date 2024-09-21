"use client"; 
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Page() {
   
    return (
      <main >
        <Navbar />
        <div >
       <Home/>
          <About />
        </div>
        <Contact />
      </main>
    );
  }
