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
        <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Welcome to</h1>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Engineer's Scoops</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Engineer's Scoops is an exceptional ice-cream and falooda outlet proudly brought to you by Atoms Group. With a team of skilled engineers at the helm</p>
           
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-4 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                View menu
            </a> 
            <a href="#" className="inline-flex items-center justify-center px-5 py-3  text-base font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
               Call to get Service
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-span-5 sm:flex">
            <img src="./images/hero/scoops.svg" alt="mockup"/>
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
        src="./images/about/2.svg" // Replace with the actual image URL
        alt="About Image"
        className="w-2/3 md:w-2/3  h-auto object-cover rounded-lg mx-auto mb-2 width"
      />
    </div>
 
    {/* Content on the Right */}
    <div className="lg:order-2 lg:w-1/1 px-4 text-left full-text" >
    <h3 className="px-3 mb-3 text-2xl text-gray-700 ">Taste like always craves for</h3>
    
      
      <div className="px-3">
      <p>
        Engineer's Scoops is an exceptional ice-cream and falooda outlet proudly brought to you by Atoms Group. With a team of skilled engineers at the helm, we have curated special faloodas, tailored for each engineering department, adding a unique touch to your experience. Visit our retail store to indulge in a delectable selection of ice-creams and faloodas, or elevate your events with our delightful offerings. Our interactive games promise an enjoyable time while savoring our delicious treats. Treat yourself to the best at Engineer's Scoops!
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>

      {/* Content on the right */}
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Prioritise Quality 
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg>  </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Sesonal Flavours 
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
       Premium Taste
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg> </div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Fresh Delight
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg></div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
       Customer Satisfaction
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
                      color="orange"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clipRule="evenodd"
                      ></path>
                    </svg></div>
      <div className="text-black text-base font-normal font-['Poppins'] leading-relaxed md:whitespace-nowrap">
        Professional Staff
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
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/menu-1.jpg" alt="Menu 1" />
    <img className="object-cover object-center rounded w-[80%] md:w-[40%]  h-full" src="./images/about/menu-2.jpg" alt="Menu 2" />
  </div>
</section>






<MyComponent/>



<section className="p-10">

<div className="container mt-6 mx-auto md:px-6">
 
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold text-black">Popular Items</h2>

    <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12 ">
      <div>
    <div className="mb-6 lg:mb-0 rounded-40 shadow-lg">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">
           <div className="melt-container relative overflow-hidden bg-cover bg-no-repeat">
            <img src="./images/about/16.svg" alt="" className="melt-image w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-[-1px] text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="white"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-3xl font-bold text-black">Faluda</h5>
            <h6 className="mb-2 font-medium text-primary dark:text-primary-400">
              Chocolate - Cherry - Vanilla
            </h6>
            <ul className="mb-4 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
           
            <p className="mb-5">
              At vero eos et accusamus et iusto<br/> odio dignissimos ducimus qui<br/>
              blanditiis praesentium accusamus<br/> voluptatum deleniti atque<br/>
              
            </p>
          </div>
        </div>
      </div>
      <img className="z-[-22] lg:bottom-44  relative left-1/2 transform -translate-x-1/2" src="./images/about/icestick.svg" alt="icecreamstick" />
</div>
<div>
      <div className="mb-6 lg:mb-0 rounded-40 shadow-lg">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <div className="melt-container relative overflow-hidden bg-cover bg-no-repeat">
            <img src="./images/about/15.svg" alt="" className="melt-image w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-[-1px] text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="white"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
             </div>
          <div className="p-4">
            <h5 className="mb-2 text-3xl font-bold text-black">Scoops</h5>
            <h6 className="mb-2 font-medium text-primary dark:text-primary-400">
              Chocolate - Nuts - Vanilla
            </h6>
            <ul className="mb-4 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
             
              </li>
            </ul>
            <p className="mb-5">
              At vero eos et accusamus et iusto<br/> odio dignissimos ducimus qui<br/>
              blanditiis praesentium accusamus<br/> voluptatum deleniti atque<br/>
              
            </p>
  
          </div>
      
        </div>
       
      </div>
      <img className="z-[-22] lg:bottom-44  relative left-1/2 transform -translate-x-1/2" src="./images/about/icestick.svg" alt="icecreamstick" />
</div>
    <div>
      <div className="rounded-40 shadow-lg">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="melt-container relative overflow-hidden bg-cover bg-no-repeat">
            <img src="./images/about/17.svg" alt="" className="melt-image w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute left-0 bottom-[-1px] text-white dark:text-neutral-700" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="white"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-3xl font-bold text-black">Ice-cream</h5>
            <h6 className="mb-2 font-medium text-primary dark:text-primary-400">
              Chocolate - Strawberry - Vanilla
            </h6>
            <ul className="mb-4 flex justify-center">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="yellow"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
              <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" className="w-5 text-warning">
                  <path fill="white" stroke="yellow" stroke-width="40"
                    d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
                </svg>
              </li>
            </ul>
            <p className="mb-5">
              At vero eos et accusamus et iusto<br/> odio dignissimos ducimus qui<br/>
              blanditiis praesentium accusamus<br/> voluptatum deleniti atque<br/>
              
            </p>
          </div>
          </div>
      </div>
      <img className="z-[-22] lg:bottom-44  relative left-1/2 transform -translate-x-1/2" src="./images/about/icestick.svg" alt="icecreamstick" />
      
        
</div>
    </div>
  </section>
 
</div>

</section>




 


































































 







</>





    
  );
};

export default Section2;
