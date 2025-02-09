"use client"

import React,{useEffect} from 'react';

const Page2 = () => {
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
        <div className='bg-[#08090B] pb-[40px] md:pb-[60px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[150px] pt-[25px] md:pt-[30px] lg:pt-[40px] xl:pt-[50px] 2xl:pt-[64px]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[25px] px-[24px] sm:px-[0] feature'>
                    <div className='col-span-1'>
                        <div className="relative overflow-hidden bg-[#0F1012]">
                            <div className="relative group svg-container">
                                <span className='VERIFICATION text-[28px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !w-full absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[70%] transition-transform duration-300 ease-in-out !text-[#FEFFFF]'>Sky Challenge</span>
                                <svg width="100%" className='h-[112px] 2xl:h-[132px] svg-default' viewBox="0 0 523 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.39844 -25.3298L521.587 -58.1751L523.398 -29.2317C527.166 30.9903 529.049 61.1013 511.511 80.9804C493.973 100.859 463.862 102.743 403.64 106.511L134.155 123.371C73.9332 127.139 43.8222 129.023 23.9431 111.485C4.064 93.9466 2.18013 63.8356 -1.58762 3.61357L-3.39844 -25.3298Z" fill="#252628"/>
                                <path d="M-3.86038 -33.0503L517.121 -65.6451L518.901 -37.2007C520.785 -7.07556 522.195 15.4682 520.947 32.9672C519.701 50.4518 515.806 62.8248 507.138 72.6494C498.471 82.474 486.68 87.881 469.487 91.2969C452.279 94.7156 429.736 96.1271 399.611 98.0119L133.132 114.684C103.007 116.569 80.463 117.978 62.9639 116.731C45.4793 115.484 33.1063 111.589 23.2817 102.922C13.4571 94.2539 8.05013 82.4629 4.63421 65.2699C1.21546 48.0628 -0.196024 25.5192 -2.08078 -4.60588L-3.86038 -33.0503Z" fill="url(#paint0_linear_588_596)"/>
                                <path d="M-3.86038 -33.0503L517.121 -65.6451L518.901 -37.2007C520.785 -7.07556 522.195 15.4682 520.947 32.9672C519.701 50.4518 515.806 62.8248 507.138 72.6494C498.471 82.474 486.68 87.881 469.487 91.2969C452.279 94.7156 429.736 96.1271 399.611 98.0119L133.132 114.684C103.007 116.569 80.463 117.978 62.9639 116.731C45.4793 115.484 33.1063 111.589 23.2817 102.922C13.4571 94.2539 8.05013 82.4629 4.63421 65.2699C1.21546 48.0628 -0.196024 25.5192 -2.08078 -4.60588L-3.86038 -33.0503Z" stroke="white" stroke-opacity="0.08"/>
                                <path d="M-3.86038 -33.0503L517.121 -65.6451L518.901 -37.2007C520.785 -7.07556 522.195 15.4682 520.947 32.9672C519.701 50.4518 515.806 62.8248 507.138 72.6494C498.471 82.474 486.68 87.881 469.487 91.2969C452.279 94.7156 429.736 96.1271 399.611 98.0119L133.132 114.684C103.007 116.569 80.463 117.978 62.9639 116.731C45.4793 115.484 33.1063 111.589 23.2817 102.922C13.4571 94.2539 8.05013 82.4629 4.63421 65.2699C1.21546 48.0628 -0.196024 25.5192 -2.08078 -4.60588L-3.86038 -33.0503Z" stroke="url(#paint1_linear_588_596)"/>
                                <defs>
                                <linearGradient id="paint0_linear_588_596" x1="0.511083" y1="44.8287" x2="522.491" y2="12.1715" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.01"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.01"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_588_596" x1="408.751" y1="19.2876" x2="117.312" y2="37.5212" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div className='px-[20px] sm:px-[25px] lg:px-[32px]'>
                                <span className='PHASE mt-[20px] sm:mt-[25px] lg:mt-[32px]'>PHASE 1</span>
                                <p className='verifyskill mt-[14px] md:mt-[16px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[24px]'>Verify your skills under easier trading objectives. upon passing, you become a sky trader and get access to receive an exclusive monthly salary.</p>
                            </div>
                            <div className='borderder my-[20px] sm:my-[25px] lg:my-[32px]'></div>
                            <ul className='flex flex-col w-full px-[20px] sm:px-[25px] lg:px-[32px] pb-[25px] lg:pb-[30px] xl:pb-[35px] 2xl:pb-[40px] gap-[20px] sm:gap-[25px] lg:gap-[32px]'>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Profit Target</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Daily Drawdown</span>
                                        <span className='profiletarget2'>05%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Absolute Drawdown</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Time Limit</span>
                                        <span className='profiletarget2'>UNLIMITED</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-full'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Min Trading Days</span>
                                        <span className='profiletarget2'>1 Day</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Refundable Fee</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-0'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20"               gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Reset Discount</span>
                                        <span className='profiletarget2'>20%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative overflow-hidden bg-[#0F1012]">
                            <div className="relative group ">
                                <span className='VERIFICATION text-[28px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !w-full absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[70%] transition-transform duration-300 ease-in-out'>VERIFICATION</span>

                                <svg width="100%" className='h-[112px] 2xl:h-[132px]' viewBox="0 0 523 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4102 -58.1707L532.39 -25.5229L530.58 3.42051C526.813 63.6426 524.93 93.7537 505.051 111.292C485.172 128.831 455.061 126.947 394.839 123.181L128.36 106.513C68.1379 102.747 38.0268 100.863 20.4884 80.9847C2.94989 61.1059 4.83321 30.9949 8.59986 -29.2272L10.4102 -58.1707Z" fill="#C0FC04" fill-opacity="0.2"/>
                                <path d="M5.41016 -66.1707L527.39 -33.5229L525.58 -4.57949C521.813 55.6426 519.93 85.7537 500.051 103.292C480.172 120.831 450.061 118.947 389.839 115.181L123.36 98.5134C63.1379 94.7468 33.0268 92.8634 15.4884 72.9847C-2.05011 53.1059 -0.166785 22.9949 3.59986 -37.2272L5.41016 -66.1707Z" fill="url(#paint0_linear_589_599)"/>
                                <defs>
                                <linearGradient id="paint0_linear_589_599" x1="269.825" y1="-49.6326" x2="282.241" y2="104.288" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#C0FC04"/>
                                <stop offset="1" stop-color="#9DCF01"/>
                                </linearGradient>
                                </defs>
                                </svg>


                            </div>
                            <div className='px-[20px] sm:px-[25px] lg:px-[32px]'>
                                <span className='PHASE mt-[20px] sm:mt-[25px] lg:mt-[32px]'>PHASE 2</span>
                                <p className='verifyskill mt-[14px] md:mt-[16px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[24px]'>Verify your skills under easier trading objectives. upon passing, you become a sky trader and get access to receive an exclusive monthly salary.</p>
                            </div>
                            <div className='borderder my-[20px] sm:my-[25px] lg:my-[32px]'></div>
                            <ul className='flex flex-col w-full px-[20px] sm:px-[25px] lg:px-[32px] pb-[25px] lg:pb-[30px] xl:pb-[35px] 2xl:pb-[40px] gap-[20px] sm:gap-[25px] lg:gap-[32px]'>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Profit Target</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Daily Drawdown</span>
                                        <span className='profiletarget2'>05%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Absolute Drawdown</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Time Limit</span>
                                        <span className='profiletarget2'>UNLIMITED</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-full'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Min Trading Days</span>
                                        <span className='profiletarget2'>1 Day</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Refundable Fee</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-0'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20"               gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Reset Discount</span>
                                        <span className='profiletarget2'>20%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className="relative overflow-hidden bg-[#0F1012]">
                            <div className="relative group ">
                                <span className='VERIFICATION  text-[28px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] !w-full absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[70%] transition-transform duration-300 ease-in-out !text-[#FEFFFF]'>VERIFICATION</span>

                                <svg width="100%" className='h-[112px] 2xl:h-[132px]'  viewBox="0 0 523 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.4102 -58.1707L532.39 -25.5229L530.58 3.42051C526.813 63.6426 524.93 93.7537 505.051 111.292C485.172 128.831 455.061 126.947 394.839 123.181L128.36 106.513C68.1379 102.747 38.0268 100.863 20.4884 80.9847C2.94989 61.1059 4.83321 30.9949 8.59986 -29.2272L10.4102 -58.1707Z" fill="#252628"/>
                                <path d="M5.87797 -65.6407L526.86 -33.0554L525.081 -4.61094C523.197 25.5142 521.786 48.0578 518.367 65.265C514.952 82.458 509.545 94.2491 499.72 102.917C489.896 111.585 477.523 115.48 460.038 116.727C442.539 117.975 419.996 116.566 389.87 114.681L123.391 98.0142C93.266 96.1299 70.7224 94.7189 53.5152 91.3004C36.3223 87.8848 24.5311 82.4781 15.8633 72.6537C7.19546 62.8292 3.30009 50.4563 2.05343 32.9717C0.805726 15.4726 2.21468 -7.07109 4.09889 -37.1962L5.87797 -65.6407Z" fill="url(#paint0_linear_594_601)"/>
                                <path d="M5.87797 -65.6407L526.86 -33.0554L525.081 -4.61094C523.197 25.5142 521.786 48.0578 518.367 65.265C514.952 82.458 509.545 94.2491 499.72 102.917C489.896 111.585 477.523 115.48 460.038 116.727C442.539 117.975 419.996 116.566 389.87 114.681L123.391 98.0142C93.266 96.1299 70.7224 94.7189 53.5152 91.3004C36.3223 87.8848 24.5311 82.4781 15.8633 72.6537C7.19546 62.8292 3.30009 50.4563 2.05343 32.9717C0.805726 15.4726 2.21468 -7.07109 4.09889 -37.1962L5.87797 -65.6407Z" stroke="white" stroke-opacity="0.08"/>
                                <path d="M5.87797 -65.6407L526.86 -33.0554L525.081 -4.61094C523.197 25.5142 521.786 48.0578 518.367 65.265C514.952 82.458 509.545 94.2491 499.72 102.917C489.896 111.585 477.523 115.48 460.038 116.727C442.539 117.975 419.996 116.566 389.87 114.681L123.391 98.0142C93.266 96.1299 70.7224 94.7189 53.5152 91.3004C36.3223 87.8848 24.5311 82.4781 15.8633 72.6537C7.19546 62.8292 3.30009 50.4563 2.05343 32.9717C0.805726 15.4726 2.21468 -7.07109 4.09889 -37.1962L5.87797 -65.6407Z" stroke="url(#paint1_linear_594_601)"/>
                                <defs>
                                <linearGradient id="paint0_linear_594_601" x1="0.509876" y1="12.176" x2="522.49" y2="44.8237" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.01"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.01"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_594_601" x1="408.75" y1="37.7097" x2="117.311" y2="19.4814" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div className='px-[20px] sm:px-[25px] lg:px-[32px]'>
                                <span className='PHASE mt-[20px] sm:mt-[25px] lg:mt-[32px]'>PHASE 3</span>
                                <p className='verifyskill mt-[14px] md:mt-[16px] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[24px]'>Monetize your trades in a demo environment and get rewarded up to 100% of the simulated profits without risking your capital.</p>
                            </div>
                            <div className='borderder my-[20px] sm:my-[25px] lg:my-[32px]'></div>
                            <ul className='flex flex-col w-full px-[20px] sm:px-[25px] lg:px-[32px] pb-[25px] lg:pb-[30px] xl:pb-[35px] 2xl:pb-[40px] gap-[20px] sm:gap-[25px] lg:gap-[32px]'>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Profit Target</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Daily Drawdown</span>
                                        <span className='profiletarget2'>05%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Max Absolute Drawdown</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Time Limit</span>
                                        <span className='profiletarget2'>UNLIMITED</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-full'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Min Trading Days</span>
                                        <span className='profiletarget2'>1 Day</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Refundable Fee</span>
                                        <span className='profiletarget2'>10%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2 !w-0'></div></div>
                                </div>
                                </li>
                                <li className='flex justify-center items-start gap-[8px] lg:gap-[12px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="19.5" fill="url(#paint0_linear_564_510)"/>
                                <circle cx="20" cy="20" r="19.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="20" cy="20" r="19.5" stroke="url(#paint1_linear_564_510)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_564_510" x1="0" y1="20" x2="40" y2="20"               gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#0F1012" stop-opacity="0.1"/>
                                    <stop offset="0.535" stop-color="#1B1D20" stop-opacity="0.7"/>
                                    <stop offset="1" stop-color="#0F1012" stop-opacity="0.1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_564_510" x1="31.2839" y1="20" x2="8.95062" y2="20" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0"/>
                                    <stop offset="0.51" stop-color="white" stop-opacity="0.24"/>
                                    <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                                </svg>
                                <div className='flex flex-col w-full gap-[10px] lg:gap-[16px] mt-[3px]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='profiletarget'>Reset Discount</span>
                                        <span className='profiletarget2'>20%</span>
                                    </div>
                                    <div className='profitsign flex justify-start items-center'><div className='profitsign2'></div></div>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className='buttonstli flex justify-center items-center mx-auto'>START TRADING
                </button>
            </div>
        </div>
    );
};

export default Page2;