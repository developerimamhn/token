"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import image17 from "../image/image17.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';





const Page5 = () => {

    useEffect(() => {
        const handleScroll = () => {
          const features = document.querySelectorAll('.feature');
          const windowHeight = window.innerHeight;
    
          features.forEach((feature) => {
            const featurePosition = feature.getBoundingClientRect().top;
    
            if (featurePosition < windowHeight - 100) {
              feature.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    return (
        <div className='bg-[#08090B] relative'>
            <svg className='w-fit absolute left-1/2 transform -translate-x-1/2 top-0' viewBox="0 0 561 280" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="280.5" cy="-0.5" r="280.5" fill="url(#paint0_linear_738_231)" fill-opacity="0.2"/>
<circle cx="280.5" cy="-0.5" r="280" stroke="white" stroke-opacity="0.05"/>
<circle cx="280.5" cy="-0.5" r="280" stroke="url(#paint1_linear_738_231)" stroke-opacity="0.2"/>
<circle cx="280.5" cy="-0.5" r="216.5" fill="url(#paint2_linear_738_231)" fill-opacity="0.2"/>
<circle cx="280.5" cy="-0.5" r="216" stroke="white" stroke-opacity="0.02"/>
<circle cx="280.5" cy="-0.5" r="216" stroke="url(#paint3_linear_738_231)" stroke-opacity="0.1"/>
<g filter="url(#filter0_f_738_231)">
<ellipse cx="293" cy="47.5" rx="12" ry="47.5" fill="white"/>
</g>
<defs>
<filter id="filter0_f_738_231" x="117" y="-164" width="352" height="423" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur_738_231"/>
</filter>
<linearGradient id="paint0_linear_738_231" x1="0" y1="-281" x2="646.318" y2="-153.919" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.02"/>
<stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
<stop offset="1" stop-color="white" stop-opacity="0.02"/>
</linearGradient>
<linearGradient id="paint1_linear_738_231" x1="438.757" y1="-0.500019" x2="125.532" y2="-0.500019" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_738_231" x1="64" y1="-217" x2="562.852" y2="-118.915" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.02"/>
<stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
<stop offset="1" stop-color="white" stop-opacity="0.02"/>
</linearGradient>
<linearGradient id="paint3_linear_738_231" x1="402.649" y1="-0.500014" x2="160.89" y2="-0.500014" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

            <div className='py-[40px] md:py-[60px] lg:py-[90px] xl:py-[120px] 2xl:py-[154px] feature'>
                <div className=''>
                    <h2 className='treaderssteestee text-[35px] md:text-[40px] lg:text-[44px] xl:text-[55px] 2xl:text-[64px]'>Traders Testimonials</h2>
                    <p className='tradingskils mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px] pb-[25px] sm:pb-[30px] md:pb-[40px] xl:pb-[60px] 2xl:pb-[75px]'>Don't let your trading skills go unrewarded. prove yourself <br className='md:block hidden'/> and secure funding with our risk-free plans.</p>
                </div>
                <div className=''>
                <Swiper 
                navigation={{
                    prevEl: '.prevRef',
                    nextEl: '.nextRef',
                  }}
                  modules={[Navigation]}
                  loop={true}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 1 ,
                    },
                    1068: { slidesPerView: 1.4,
                        spaceBetween: 30
                     },
                     1268: { slidesPerView: 2.4,
                        spaceBetween: 30
                     },
                  }}
                className="mySwiper ">
                <SwiperSlide>
                    <div className='flex-1 relative py-[20px] sm:py-[25px] md:py-[30px] lg:py-[35px] xl:py-[40px] px-[20px] sm:px-[25px] md:px-[50px] lg:px-[40px] xl:px-[80px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 left-8 2xl:left-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute top-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 0.999921" className='w-full h-[2px] absolute top-0 left-1' stroke="url(#paint0_radial_564_658)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.49996) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute bottom-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 1.00008" stroke="url(#paint0_radial_564_659)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.50004) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 right-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    {/* <svg className='w-full h-full absolute top-0  right-10 md:block hidden z-10' viewBox="0 0 911 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L9.99642 284" stroke="url(#paint0_radial_564_655)" stroke-linecap="square"/>
                    <path d="M901 2L901 284" stroke="url(#paint1_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 10L910 9.99992" stroke="url(#paint2_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 276L910 276" stroke="url(#paint3_radial_564_655)" stroke-linecap="square"/>
                    <defs>
                    <radialGradient id="paint0_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.99821 142.498) rotate(90.2032) scale(141.501 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900.5 143) rotate(90) scale(141 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 10.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 276.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    </defs>
                    </svg> */}

                    <div className=''>
                        <p className='fuderiingas'>The foundational features of Sketch have been indispensable. I also like using it while flying and traveling, and the fact it's a native app makes designing more enjoyable overall.</p>
                        <div className='flex justify-start items-center mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px] gap-[8px] lg:gap-[12px]'>
                            <Image src={image17} alt=''/>
                            <div>
                                <h3 className='namaction'>Naimur Rahman</h3>
                                <p className='deverlopaericon'>Web Designer</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex-1 relative py-[20px] sm:py-[25px] md:py-[30px] lg:py-[35px] xl:py-[40px] px-[20px] sm:px-[25px] md:px-[50px] lg:px-[40px] xl:px-[80px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 left-8 2xl:left-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute top-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 0.999921" className='w-full h-[2px] absolute top-0 left-1' stroke="url(#paint0_radial_564_658)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.49996) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute bottom-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 1.00008" stroke="url(#paint0_radial_564_659)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.50004) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 right-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    {/* <svg className='w-full h-full absolute top-0  right-10 md:block hidden z-10' viewBox="0 0 911 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L9.99642 284" stroke="url(#paint0_radial_564_655)" stroke-linecap="square"/>
                    <path d="M901 2L901 284" stroke="url(#paint1_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 10L910 9.99992" stroke="url(#paint2_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 276L910 276" stroke="url(#paint3_radial_564_655)" stroke-linecap="square"/>
                    <defs>
                    <radialGradient id="paint0_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.99821 142.498) rotate(90.2032) scale(141.501 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900.5 143) rotate(90) scale(141 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 10.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 276.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    </defs>
                    </svg> */}

                    <div className=''>
                        <p className='fuderiingas'>The foundational features of Sketch have been indispensable. I also like using it while flying and traveling, and the fact it's a native app makes designing more enjoyable overall.</p>
                        <div className='flex justify-start items-center mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px] gap-[8px] lg:gap-[12px]'>
                            <Image src={image17} alt=''/>
                            <div>
                                <h3 className='namaction'>Naimur Rahman</h3>
                                <p className='deverlopaericon'>Web Designer</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex-1 relative py-[20px] sm:py-[25px] md:py-[30px] lg:py-[35px] xl:py-[40px] px-[20px] sm:px-[25px] md:px-[50px] lg:px-[40px] xl:px-[80px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 left-8 2xl:left-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute top-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 0.999921" className='w-full h-[2px] absolute top-0 left-1' stroke="url(#paint0_radial_564_658)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_658" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.49996) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[2px] absolute bottom-4 left-0 md:block hidden' viewBox="0 0 911 2" fill="none">
                    <path d="M1 1L910 1.00008" stroke="url(#paint0_radial_564_659)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 1.50004) scale(454.5 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[3px] h-full absolute top-0 right-12 md:block hidden' viewBox="0 0 2 284" fill="none">
                    <path d="M1 1L1.00001 283" stroke="url(#paint0_radial_564_657)" stroke-linecap="square"/>
                    <defs>
                        <radialGradient id="paint0_radial_564_657" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500006 142) rotate(90) scale(141 0.5)">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                        </radialGradient>
                    </defs>
                    </svg>
                    {/* <svg className='w-full h-full absolute top-0  right-10 md:block hidden z-10' viewBox="0 0 911 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L9.99642 284" stroke="url(#paint0_radial_564_655)" stroke-linecap="square"/>
                    <path d="M901 2L901 284" stroke="url(#paint1_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 10L910 9.99992" stroke="url(#paint2_radial_564_655)" stroke-linecap="square"/>
                    <path d="M1 276L910 276" stroke="url(#paint3_radial_564_655)" stroke-linecap="square"/>
                    <defs>
                    <radialGradient id="paint0_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.99821 142.498) rotate(90.2032) scale(141.501 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint1_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(900.5 143) rotate(90) scale(141 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint2_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 10.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    <radialGradient id="paint3_radial_564_655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(455.5 276.5) scale(454.5 0.5)">
                    <stop stop-color="white"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.14"/>
                    </radialGradient>
                    </defs>
                    </svg> */}

                    <div className=''>
                        <p className='fuderiingas'>The foundational features of Sketch have been indispensable. I also like using it while flying and traveling, and the fact it's a native app makes designing more enjoyable overall.</p>
                        <div className='flex justify-start items-center mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px] gap-[8px] lg:gap-[12px]'>
                            <Image src={image17} alt=''/>
                            <div>
                                <h3 className='namaction'>Naimur Rahman</h3>
                                <p className='deverlopaericon'>Web Designer</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    </Swiper>
                    <div className='flex justify-center items-center gap-[14px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] mt-[30px] sm:mt-[44px] lg:mt-[55px] 2xl:mt-[72px]'>
                    <svg className='prevRef rotate-[180deg] cursor-pointer' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="27.5" fill="url(#paint0_linear_564_690)"/>
                    <circle cx="28" cy="28" r="27.5" stroke="white" stroke-opacity="0.08"/>
                    <circle cx="28" cy="28" r="27.5" stroke="url(#paint1_linear_564_690)"/>
                    <path d="M24.91 35.9201L31.43 29.4001C32.2 28.6301 32.2 27.3701 31.43 26.6001L24.91 20.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_564_690" x1="0" y1="0" x2="64.5166" y2="12.6854" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.02"/>
                    <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_564_690" x1="43.7975" y1="28" x2="12.5309" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>

                    <svg className='nextRef cursor-pointer' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="27.5" fill="url(#paint0_linear_564_690)"/>
                    <circle cx="28" cy="28" r="27.5" stroke="white" stroke-opacity="0.08"/>
                    <circle cx="28" cy="28" r="27.5" stroke="url(#paint1_linear_564_690)"/>
                    <path d="M24.91 35.9201L31.43 29.4001C32.2 28.6301 32.2 27.3701 31.43 26.6001L24.91 20.0801" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_564_690" x1="0" y1="0" x2="64.5166" y2="12.6854" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.02"/>
                    <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                    <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_564_690" x1="43.7975" y1="28" x2="12.5309" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default Page5;