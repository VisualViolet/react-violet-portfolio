import React from 'react';

export default function About() {

  return (
    <div>
      <h1 className='text-center title mb-5'>Hi, I'm Savannah.</h1>
      <img className='picture' src="sav-pro-profile.jpg" alt="profile"/>
      <p className='mt-5 text-center text-light bio'>
      I am a student enrolled in the UW Coding Bootcamp. This bootcamp teaches in-demand skills such as HTML5, CSS, JavaScript, jQuery, and the MERN stack. I have previous coding experience with HTML, CSS, SQL, and C# and am seeking an opportunity to use this combination of new and learned skills in a technical environment.
      </p>
      <p className='text-center text-light bio' >
      Over the course of my schooling, I have contributed to and completed several projects. I strive to build attractive, responsive, and accessibility compliant websites while still showing off my creativity. Learning how to code is learning how to create!
      </p>
    </div>
  );
}