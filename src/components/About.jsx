import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-r hover:bg-gradient-to-l from-purple-700 to-gray-500'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Maverick, I hope you enjoy the porfolio website.</p>
            </div>
            <div>
              <p>I am very passionate about creating software for anything I can. 
                 I am in college as a computer science major but for the most part I am 
                 self taught and have learned almost eveything on my own.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;