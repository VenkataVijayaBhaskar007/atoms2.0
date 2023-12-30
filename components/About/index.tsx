"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import "./style.css";
import Cards from "./Cards";
import About1 from "./About1";
const About = () => {
  
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      {/* <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  hie...
                </span>{" "}
               About us
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                This is about
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Atoms  2.0ss
                </span>
              </h2>
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                ultricies lacus non fermentum ultrices. Fusce consectetur le.
              </p>
              <div className="gap-3">
              <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-hero">
              our
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-2 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    vision
                </span>
              </h2>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  2.0s...
                  </h3>
                  <p>Atoms  2.0s....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  2.0s
                  </h3>
                  <p>Atoms  2.0s....</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Atoms  2.0s...
                  </h3>
                  <p>Atoms  2.0s....</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
  






<About1/>


























<section className="overflow-hidden   lg:pt-[8px] lg:pb-[10px] bg-white dark:bg-dark px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
 

            <div className="w-full px-4 ">
              <div className="mt-3 lg:mt-0 ">
             <div style={{marginLeft:"-8px"}}>          <motion.div
    variants={{
      hidden: {
        opacity: 0,
        x: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: 0.1 }}
    viewport={{ once: true }}
    className="animate_left"
  ><h2 className="text-with-circle background-circle mb-1 text2xl font-bold text-black dark:text-white xl:text-hero" style={{ whiteSpace: 'nowrap' }}>
  <span className="text-content">Services we provide</span>
</h2></motion.div>
</div>
      <div>       
              
      <p>
    At Atoms Group, our mission is to inspire the world to learn. We have established ourselves as creators of learning environments that empower individuals to enhance their learning capabilities and contribute to making the world a better place to live. Our expertise lies in providing courses and training to students, teachers, parents, and educational institution management, utilizing our innovative models to create effective learning spaces.
    </p>
                   </div>
              </div>
            
            </div>
         
          </div>
        </div>
      </section>












<section className="container mx-auto my-2 xl:mb-50">
  
    {/* First Card */}
    <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 "
      >
 <div className="flex flex-wrap justify-center">
  
  {/*card 2 */}
  <div className="py10 transform hover:scale-105 transition-all duration-300 ease-in-out">
  <div className="relative  h-48 overflow-hidden max-w-sm mx-8  rounded-bottom-right rounded-top-left rounded-top-right">
    <img
      className="object-cover object-center w-full h-full rounded-bottom-right rounded-top-left rounded-top-right"
     src="./images/about/3.svg"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 opacity-30 rounded-bottom-right rounded-top-left rounded-top-right"></div>
  </div>

  {/* Card */}
  <div className="max-w-sm mx-8  overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl  transform hover:scale-100 transition-all duration-300 ease-in-out margin1 rounded-top-left-card rounded-top-right-card rounded-bottom-right-card rounded-bottom-left" style={{marginTop:"-1rem"}}>
    <div className="p-6 relative z-10">
    <small className="text-blue-400 text-xs">Atoms 2.0</small>
      <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">Engineers Scoops </h2>
<p className="text-sm tracking-tight font-light text-slate-400 leading-6">
Engineer's Scoops is an exceptional ice-cream and falooda outlet proudly brought to you by Atoms Group. With a team of skilled engineers at the...   </p>
      <a
        href="/EngineersScoops"
        className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
      >
        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Visit site</button>
      </a>
    </div>
  </div>
  </div>
  {/*card 3 */}
  <div className="py10 transform hover:scale-105 transition-all duration-300 ease-in-out">
  <div className="relative  h-48 overflow-hidden max-w-sm mx-8  rounded-bottom-right rounded-top-left rounded-top-right">
    <img
      className="object-cover object-center w-full h-full rounded-bottom-right rounded-top-left rounded-top-right"
      src="./images/about/4.svg"
      alt="card image"
    />
    {/* Unique Shape Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-500 opacity-30 rounded-bottom-right rounded-top-left rounded-top-right"></div>
  </div>

  {/* Card */}
  <div className="max-w-sm mx-8  overflow-hidden bg-white dark:bg-btndark rounded-lg shadow-lg hover:shadow-xl transform hover:scale-100 transition-all duration-300 ease-in-out margin1 rounded-top-left-card rounded-top-right-card rounded-bottom-right-card rounded-bottom-left" style={{marginTop:"-1rem"}}>
    <div className="p-6 relative z-10">
      <small className="text-blue-400 text-xs">Atoms 2.0</small>
      <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">MJ saloon and SPA </h2>
<p className="text-sm tracking-tight font-light text-slate-400 leading-6">

Welcome to MJ Salon and Spa, where luxury meets tranquility. Nestled in a serene oasis, our sanctuary offers a range of tailored treatments to rejuvenate...   </p>
      <a
        href="/Mj"
        className="inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary mt-5"
      >
        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Visit site</button>
      </a>
    </div>
  </div>
  </div>
</div>



  </motion.div>
</section>



<section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
       
          
           



       <div className="logos" >
               <div className="logos-slide" >
              
       
       
           <img src="./images/clients/1.png" alt="client-1 logo image" />
       
       
       
           <img src="./images/clients/2.png" alt="client-2 logo image" />
       
       
       
           <img src="./images/clients/3.png" alt="client-3 logo image" />
       
       
       
           <img src="./images/clients/4.png" alt="client-4 logo image" />
       
       
       
           <img src="./images/clients/5.png" alt="client-5 logo image" />
       
       
       
           <img src="./images/clients/6.png" alt="client-6 logo image" />
       
       
       
           <img src="./images/clients/7.png" alt="client-7 logo image" />
       
       
       
           <img src="./images/clients/8.png" alt="client-8 logo image" />
       
       
       
           <img src="./images/clients/9.png" alt="client-9 logo image" />
       
       
       
       
           <img src="./images/clients/10.png" alt="client-10 logo image" />
       
       
       
       
           <img src="./images/clients/11.png" alt="client-11 logo image" />
       
       
       
       
           <img src="./images/clients/12.png" alt="client-12 logo image" />
       
       
       
       
           <img src="./images/clients/13.png" alt="client-13 logo image" />
       
       
       
       
           <img src="./images/clients/14.png" alt="client-14 logo image" />
       
       
       
       
           <img src="./images/clients/15.png" alt="client-15 logo image" />
       
       
       
       
           <img src="./images/clients/16.png" alt="client-16 logo image" />
       
       
       
       
           <img src="./images/clients/17.png" alt="client-17 logo image" />
       
       
       
       
           <img src="./images/clients/18.png" alt="client-18 logo image" />
       
       
       
       
           <img src="./images/clients/19.png" alt="client-19 logo image" />
       
       
       
       
           <img src="./images/clients/20.png" alt="client-20 logo image" />
       
       
       
       
           <img src="./images/clients/21.png" alt="client-21 logo image" />
       
       
       
       
           <img src="./images/clients/22.png" alt="client-22 logo image" />
       
       
       
       
           <img src="./images/clients/23.png" alt="client-23 logo image" />
       
       
       
       
           <img src="./images/clients/24.png" alt="client-24 logo image" />
       
       
       
       
           <img src="./images/clients/25.png" alt="client-25 logo image" />
       
       
       
       
           <img src="./images/clients/26.png" alt="client-26 logo image" />
       
       
       
       
           <img src="./images/clients/27.png" alt="client-27 logo image" />
       
       
       
       
           <img src="./images/clients/28.png" alt="client-28 logo image" />
       
       
       
       
           <img src="./images/clients/29.png" alt="client-29 logo image" />
       
       
       
       
           <img src="./images/clients/30.png" alt="client-30 logo image" />
       
       
       
       
           <img src="./images/clients/31.png" alt="client-31 logo image" />
       
       
       
       
           <img src="./images/clients/32.png" alt="client-32 logo image" />
       
       
       
       
           <img src="./images/clients/33.png" alt="client-33 logo image" />
       
       
       
       
           <img src="./images/clients/34.png" alt="client-34 logo image" />
       
       
       
       
               
         </div>
       
        
       </div>
       
       </section>






























    </>
  );
};

export default About;
