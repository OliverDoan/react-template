import React from 'react'

// import img
import Image from '../assets/img/about.jpg'

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Oliver Doan
              </h2>
              <p className='mb-4 text-accent'>Full Stack Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8 text-justify'>
                Hi! My name is Oliver Doan. I am a Web Developer, and I'm very passionate and
                dedicated to my work. With 1 years experience as a professional Web developer, I
                have acquired the skills and knowledge necessary to make your project a success.
              </p>
              <p className='mb-8 text-justify'>Birthday: 10/05/1999</p>
              <p className='mb-8 text-justify'>
                Education: HCMC University of Technology and Education
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
