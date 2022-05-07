import React from 'react';
import HTML from '../assets/html.png';
import Python from '../assets/python.png';
import JavaScript from '../assets/javascript.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import ReactImg from '../assets/react.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-r hover:bg-gradient-to-l from-purple-700 to-gray-500 text-gray-200'>
      {/* Container */}
      <div className='max-w-[1100px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'> These are the main skills that I have learned and worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub}  />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python}  />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg}  />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML}  />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind}  />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS}  />
                  <p className='my-4'>AWS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;