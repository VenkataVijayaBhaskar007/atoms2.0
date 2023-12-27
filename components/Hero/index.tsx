"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const images = [
  "/herosection/1.svg",
  "/herosection/2.svg",
  "/herosection/3.svg",
  "/herosection/4.svg",
];



const Hero = () => {
  const styles = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(20px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 1800,
  };

  return (
    <>
       <section id="home" className="overflow-hidden pb-20  md:pt-10 xl:pb-25 xl:pt-1 relative" >
  <div className="pt-7 sm:pt-16 lg:pt-20 mx-auto w-full h-full">
    <div className="hidden md:block scale-95 rounded-lg relative">
      <Slider {...settings} className="">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <img
                src={image}
                alt="heroimage"
                key={index}
                className="rounded-lg cursor-pointer"
              />
              <div className="hero-text-container absolute left-0 text-left pl-6 top-1/2 transform -translate-y-1/2">
              <h4 className="mb-1 heading-small text-2xl font-medium text-black dark:text-white">
                 Welcome to
              </h4>
              <h1 className="mb-2 pr-16 heading-text font-bold text-blue-600 dark:text-white xl:text-hero hover:translate-y-[-18px]">
              Atoms Group
              </h1>
              <div className="text-2xl">   
              <p className="w-1/2">
              Atoms Education is committed to providing affordable and impressive Education+ services for people from all social backgrounds.
              </p>
              </div>
              <div className="mt-8">
                             

                <p className="mt-5 text-black dark:text-white">
                  go though the site to know about our services...
                </p>
              </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
    <div className="block md:hidden scale-95 rounded-lg pt-6 relative">
   
    </div>
  </div>
</section>












      {/* <section>   <Image
                  src="/images/shape/shape-01.svg"
                  alt="shape"
                  width={200}
                  height={200}
                  className="absolute -left-0 bottom-90"
                  
                /></section> */}



















      <section className="flex items-center justify-center">
      
    </section>
    <section className="p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center" style={{ marginTop: "-14rem" }}>
  <div className="flex flex-col md:flex-row justify-center items-center">
    {/* First Card */}
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-4 mb-4 md:mb-0 overflow-hidden shadow-lg bg-white dark:bg-btndark rounded-full p-4 flex transition-transform transform hover:translate-y-[-10px] hover:scale-105">
      {/* Circular Image */}
      <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
        <img
          className="w-full h-full object-cover"
          src="https://placekitten.com/200/200"
          alt="Card 1"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">2</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">Succesfully running engineer scoops</p>
      </div>
    </div>

    {/* Second Card */}
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-4 mb-4 md:mb-0 overflow-hidden shadow-lg bg-white dark:bg-btndark rounded-full p-4 flex transition-transform transform hover:translate-y-[-10px] hover:scale-105">
      {/* Circular Image */}
      <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
        <img
          className="w-full h-full object-cover"
          src="https://placekitten.com/200/201"
          alt="Card 2"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">5</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">Succesfully running engineer scoops</p>
      </div>
    </div>

    {/* Third Card */}
    <div className="max-w-md md:max-w-lg lg:max-w-xl mx-4 overflow-hidden shadow-lg bg-white dark:bg-btndark rounded-full p-4 flex transition-transform transform hover:translate-y-[-10px] hover:scale-105">
      {/* Circular Image */}
      <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
        <img
          className="w-full h-full object-cover"
          src="https://placekitten.com/201/200"
          alt="Card 3"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">2</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">Succesfully running engineer scoops</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Hero;
