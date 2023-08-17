import React from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const About = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer.", "Competitive Programmer.", "Problem Solver.", "Tech Enthusiast."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Good to have you Here! I'm a <span ref={el} className='font-bold text-2xl text-purple-500 ' ></span></p>

        <br/>

        <p className='text-xl'>
            Currently learning MERN stack development and Improving my skill set by building some Awesome projects. You can checkout my GitHub repo's to see my progress and I push everything what i learn in a day. I'm a passionate Software Engineer looking for an entry-level position as a SDE. I have some strong knowledge in C++ / Data structures and Algorithms / HTML / CSS / Tailwind / Javascript / ReactJs / NextJs / Git / NodeJs / and ExpressJs. 
            <br/>
            <br/>
            I have worked on this portfolio project to showCase my skills. Build with tech stack : ReactJs, Tailwind CSS. Still trying to improve my portfolio day by day adding some new features. Any Suggestions? you Can connect with me through linkedin / Mail / Drop your details in Contact me Form.
        </p>
      </div>
    </div>
  )
}

export default About
