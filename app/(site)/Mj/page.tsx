"use client";
import MyComponent from "./Test";
import { motion } from "framer-motion";
import "./style.css"

const Section2 = () => {


  return (
    <>

<section className="bg-white dark:bg-gray-900 mt-8">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-2xl text-black font-semibold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Welcome to</h1>
            <h1 className="max-w-2xl mb-4 text-4xl text-blue-600 font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">MJ Saloon & Spa</h1>
            <p className="max-w-2xl mb-6 font-regular text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to MJ Salon and Spa, where luxury meets tranquility.</p>
           
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                View menu
            </a> 
            <a href="#" className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
               Call to get Service
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 sm:flex">
            <img src="./images/about/mj.jpg" alt="mockup"/>
        </div>                
    </div>
</section>
<section>
<div className="flex items-center justify-center  mb-6  ">
  <div className="text-center">
    <h1 className="text-3xl font-bold text-black">About Us</h1>
    
  </div>
</div>
 
</section>

<section>
  {/* First Card */}
  <motion.div
    variants={{
      hidden: {
        opacity: 0,
        y: -40,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.5 }}
  
    className="animate_top flex flex-col lg:flex-row rounded-lg bg-white px-4 lg:py-2 pb-9 shadow-solid-8 dark:bg-blacksection"
  >
    {/* Image on the Left */}
    <div className="lg:order-1 lg:w-1/2 lg:pr-4 mb-10">
      <img
        src="./images/hero/saloon.svg" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>
 
    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
    <h3 className="px-3 mb-3 text-2xl text-gray-700 ">Best services you get</h3>
    
      
      <div className="px-3">
      <p>
      Welcome to MJ Salon and Spa, where luxury meets tranquility. Nestled in a serene oasis, our sanctuary offers a range of tailored treatments to rejuvenate mind, body, and soul. Indulge in expert massages, revitalizing facials, and personalized beauty services, all delivered by skilled therapists. Immerse yourself in a world of relaxation, where every visit promises a renewed sense of well-being. Experience the epitome of self-care at MJ Salon and Spa.
       </p>
      </div>
      <div className="flex space-x-8 ml-2">
  {/* Left Section */}
  <div className="space-y-4 mt-4">
    
    <div className="flex items-center space-x-4">
      {/* Tick mark icon on the left */}
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>

      {/* Content on the right */}
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Facials 
      </div>
    </div>

    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>  </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Pedicure 
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
       Manicure
      </div>
    </div>

    
  </div>

  {/* Right Section */}
  <div className="space-y-4 mt-4">
    {/* Repeat the above structure with different texts */}
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Face Cleaner
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg></div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
       Minaral Bath
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-fit col-span-1"
                      color="violet"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg></div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Hair Drying
      </div>
    </div>

    
  </div>
</div>

  
    </div>
  </motion.div>
</section>

<section className="my-5">
  <div className="flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-black">Price & Menu</h1>
    </div>
  </div>

  <div className="mx-auto justify-center items-center flex flex-col md:flex-row gap-20 p-4 lg:p-10">
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/MJ1.png" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/MJ2.png" alt="Menu 2" />
  </div>
  <div className="mx-auto justify-center items-center flex flex-col md:flex-row gap-20 p-4 lg:p-10">
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/MJ3.png" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/MJ4.png" alt="Menu 2" />
  </div>
</section>









<MyComponent/>







</>





    
  );
};

export default Section2;
