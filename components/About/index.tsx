"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
import "./style.css";

import About1 from "./About1";
const About = () => {
  
  return (
    <>
     




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












<section className="container mx-auto my-2 xl:mb-5">
  
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
  <a href="/EngineersScoops" className="py10 transform hover:scale-105 transition-all duration-300 ease-in-out">
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
  </a>
  {/*card 3 */}
  <a href="/Mj" className="py10 transform hover:scale-105 transition-all duration-300 ease-in-out">
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
  </a>
</div>



  </motion.div>
</section>

































    </>
  );
};

export default About;
