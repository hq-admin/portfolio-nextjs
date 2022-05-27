import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import Image from 'next/image'

const Contact = () => {

  const formRef = useRef()
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_jjia23g', 'template_8ytoy34', formRef.current, 'uHlnrlooyBC2Q_FV_')
    .then((result) => {
      console.log(result.text);
      setDone(true);
    }, (error) => {
      console.log(error.text);
  });
}

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                  layout='fill'
                />
              </div>
              <div>
                <h2 className='py-2'>Jestin Kuriakose</h2>
                <p>Full-Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let’s talk.
                </p>
                <p className='py-4'>
                  <b>Phone: </b>519-722-0063
                </p>
                <p className='py-4'>
                <b>Email: </b>jestink@live.com
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a href='https://www.linkedin.com/in/jestin-kuriakose-47413483/' target="_blank" rel="noreferrer">  
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                  </a>
                  <a href='https://github.com/jestin-kuriakose' target="_blank" rel="noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                  </a>
                  <a href='mailto:jestink@live.com' target="_blank" rel="noreferrer">
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

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="user_name"
                    />
                  </div>
                  
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name="user_email"
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name="user_subject"
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="message"></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                {done && <p>Your Message has been sent !</p>}
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
