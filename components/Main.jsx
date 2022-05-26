import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'> Jestin</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a full-stack web developer and a multi-talented human specializing in front-end and back-end web development.
            I’m focused on building responsive front-end web applications while
            learning new back-end technologies.
          </p>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            This portfolio is developed using NextJS and Tailwind CSS!
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a href='https://www.linkedin.com/in/jestin-kuriakose-47413483/' target="_blank">  
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/jestin-kuriakose' target="_blank">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
              </div>
            </a>
            <a href='mailto:jestink@live.com' target="_blank">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
