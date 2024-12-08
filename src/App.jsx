import React, { useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import { GoXCircleFill } from "react-icons/go";
import { FiAlignJustify } from "react-icons/fi";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import htmlAndCss from './assets/HTML & CSS.jpg';
import javaScript from './assets/JavaScript.jpg';
import reactAndTailwind from './assets/React & Tailwind.jpg';
import iconhtml from './assets/HTML5.png'
import iconcss from './assets/CSS3.png'
import iconjs from './assets/JavaScript.png'
import iconreact from './assets/React.png'
import icontailwind from './assets/Tailwind CSS.png'



const Portfolio = () => {

  const [nav, setNav] = useState(false)

  const slideImages = [
    {
      url: htmlAndCss,
      link: 'https://27-rattanakul-colmar.vercel.app/',
      name: 'HTML & CSS'
    },
    {
      url: javaScript,
      link: 'https://27-rattanakul-js.vercel.app/',
      name: 'JavaScript'
    },
    {
      url: reactAndTailwind,
      link: 'https://27-rattanakul-react.vercel.app/',
      name: 'React & Tailwind'
    },
  ];

  return (
    <div>

      <div className='flex justify-between items-center p-4 bg-gray-900 text-yellow-300'>
        <div className='ml-4'>
          <h1 className='font-bold text-3xl'>Rattanakul</h1>
        </div>
        <ul className='hidden md:flex gap-4 text-center font-bold text-lg'>
          <li className='px-4'><a href="#about">About</a></li>
          <li className='px-4'><a href="#projects">Projects</a></li>
          <li className='px-4'><a href="#skills">Skills</a></li>
          <li className='px-4'><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={() => setNav(!nav)} className='md:hidden'>
          <FiAlignJustify size={35} />
        </div>
      </div>

      {/* Side drawer menu */}
      <div>
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 md:hidden'></div> : ''}
        <div className={nav ? 'fixed top-0 right-0 w-[300px] h-screen bg-gray-900 z-10 duration-300 text-yellow-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-gray-900 z-10 duration-300'}>
          <div className='flex justify-end pr-4 pt-4 cursor-pointer'><GoXCircleFill size={40} onClick={() => setNav(!nav)} /></div>
          <ul className='flex flex-col p-4 text-yellow-300'>
            <li className='py-4 flex justify-center text-lg'><a href="#about">About</a></li>
            <hr className='bg-white' />
            <li className='py-4 flex justify-center text-lg'><a href="#projects">Projects</a></li>
            <hr className='bg-white' />
            <li className='py-4 flex justify-center text-lg'><a href="#skills">Skills</a></li>
            <hr className='bg-white' />
            <li className='py-4 flex justify-center text-lg'><a href="#contact">Contact</a></li>
            <hr className='bg-white' />
          </ul>
        </div>
      </div>


      {/* Hero Section with GIF Background */}
      <div
        id="hero"
        className="hero h-lvh flex items-center justify-center text-center object-cover"  // Adjust for navbar height
        style={{
          backgroundImage: "url(https://i.pinimg.com/originals/61/8f/08/618f083c61a7460ce0a6064319af41bd.gif)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-yellow-300">
          <TypeAnimation
            sequence={["Hello", 1000, "I am Rattanakul.", 1000, "Welcome to", 1000, "My portfolio website.", 1000,]}
            smartBackspace
            showCursor={false}
            speed={50}
            repeat={Infinity}
            className='text-5xl font-bold'
            style={{ fontFamily: "Pixelify Sans" }}
          />
        </div>
      </div>

      {/* About Section */}
      <section>
        <div id='about' className='bg-gray-900 text-white grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col text-center p-4 my-12 md:mt-20'>
            <h2 className='text-5xl font-bold p-2 text-yellow-300'>About</h2>
            <p className='py-4 text-lg mx-20 my-4 text-left'>“Hello, my name is Rattanakul Butpairoj, a full-stack developer who graduated from a Junior Software Development Bootcamp. I am an expert in web development using HTML, CSS, Tailwind CSS, JavaScript, and React, focusing on creating a responsive User Interface for users.
              I am currently studying more in Backend development to enhance my skills in developing integrated applications, focusing on server management and database connections.
              <br />
              If you would like to contact me or want to know more about my work, please visit the link below.</p>
            <a href="https://drive.google.com/file/d/1bGriQT7sxY2RwcsjyAmB6vQRHJn-38yl/view?usp=sharing"
              target='blank'
              className='p-4 bg-indigo-600 rounded-lg w-1/6 mx-auto font-bold'>
              Link to CV
            </a>
          </div>
          <div className='w-full flex justify-center '>
            <img src="https://i.pinimg.com/originals/4f/d3/0e/4fd30efd8301e3551a3a63da0d9c4d88.gif" alt="" className='w-full h-auto p-4' />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div id='about' className='bg-teal-950 text-white grid grid-cols-1 md:grid-cols-2'>

          <div className="slide-container p-4 w-full h-auto">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <a href={slideImage.link} target='blank'>
                    <img src={slideImage.url} alt="" className='h-[500px] w-full object-cover' />
                  </a>
                </div>
              ))}
            </Slide>
          </div>

          <div className='my-12 md:mt-20'>
            <h2 id='projects' className='text-5xl font-bold text-yellow-300 text-center'>Project</h2>
            <ul className='mx-20 my-12'>
              <li className='p-2 text-lg'>• Designed and built a responsive website using HTML and CSS to create a user-friendly interface.</li>
              <li className='p-2 text-lg'>• Developed a JavaScript project to implement CRUD functionality, ensuring efficient data management.</li>
              <li className='p-2 text-lg'>• Created an application with React and Tailwind, focusing on routing, state management, and CRUD operations, while delivering a modern and intuitive user interface.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-8 bg-indigo-950">
        <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <img src={iconhtml} alt="" className='h-[50px] w-[50px]' />
          <img src={iconcss} alt="" className='h-[50px] w-[50px]' />
          <img src={iconjs} alt="" className='h-[50px] w-[50px]' />
          <img src={iconreact} alt="" className='h-[50px] w-[50px]' />
          <img src={icontailwind} alt="" className='h-[50px] w-[50px]' />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:taerattanakun@gmail.com" className="underline">taerattanakun@gmail.com</a></p>
        <p>Github: <a href="https://github.com/Tae-rtkk" className="underline">Tae-rtkk</a></p>
      </section>
    </div>
  );
};

export default Portfolio;
