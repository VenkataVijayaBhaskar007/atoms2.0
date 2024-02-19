import React, { useEffect } from 'react';

const TestimonialSlider = () => {

  return (
    <section className="bg-gray-50">
    
<div className="min-w-screen  bg-gray-50 flex items-center justify-center ">
    <div className="w-full bg-white border-t border-b border-gray-200 px-5  py-5 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
                <h1 className="text-4xl  font-bold mb-3 text-gray-600">Testimonials</h1>
                <h3 className="text-xl mb-2 font-light">Happy customer's of Mj Saloon & SPA</h3>
                <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-violet-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-violet-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-violet-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-violet-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-violet-500 ml-1"></span>
                </div>
            </div>
            <div className="-mx-3 md:flex items-start">
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                            <img className="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Sujatha</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">Good service. better to visit again, very friendly environment and good cultured behaviour and suggested better eyebrow shape and done well.</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img className ="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Naveena</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">Excellent SPA at affordable pricing. The masseurs were polite, well mannered and specialists in their work. Had a excellent body massage. Balinese massage done by us were excellent. </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img className ="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Rosie Florence</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">Everything maintained clean and neat in the saloon and the facial was so good, Next time I'll come with my friends also.</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img className ="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Charitha</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">affordable for the service. good maintainance and pedicure and facial were done really well. one more time visit.</p>
                        </div>
                    </div>
                </div>
                <div className="px-3 md:w-1/3">
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                            <img className="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Navya</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">okasari vaste malli malli ravali anipistundi, chala manchi service icharu, really chala baga experice vundi.. malli next month ravali anukuntunna, thankyou...</p>
                        </div>
                    </div>
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                     <img className="object-cover w-full h-full" src="./images/about/2.png" alt=""/>
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Krishnaveni</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight">Nail and eyebrow and facial chinchanu.. akka chala baga chesaru. eyebrow first time ani bayapaddanu but baaga chesaru assalu, best shape choose chesi chesaru. next time hair step cut ki vastanu..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </section>
  );
};

export default TestimonialSlider;
