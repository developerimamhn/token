'use client'


import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import logo from "../image/logo1.png";

const Footer = () => {
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
    
    
    const [isTranslated, setIsTranslated] = useState(false);
    
    
    const handleClick = () => {
    setIsTranslated(true);
    
    setTimeout(() => {
      setIsTranslated(false);
    }, 200); 
    };
    return (
        <div>
            <div className='bg-[#0A0806] px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px] pt-[24px] sm:pt-[30px] md:pt-[40px] lg:pt-[60px] xl:pt-[80px] 2xl:pt-[96px]'>
                <div className='grid grid-cols-12 gap-[30px] pb-[35px] sm:pb-[44px] md:pb-[54px] lg:pb-[64px] xl:pb-[74px] 2xl:pb-[84px]'>
                    <div className='col-span-6 sm:col-span-4 feature'>
                        <Image className='rounded-[6px] lg:rounded-[8px] w-[50px] md:w-[70px] xl:w-[94px]' src={logo} alt=""/>
                        <p className='lastpadding mt-[16px] md:mt-[25px] xl:mt-[32px]'>Funding Traders Since 2018</p>
                        <div className='flex items-center gap-[14px] lg:gap-[20px] mt-[25px] md:mt-[35px] xl:mt-[55px]'>
                        <svg className='w-[25spx] sm:w-[40px] lg:w-[64px] ' viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="31.5" cy="32" r="31" fill="white" stroke="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3623 26.2852C42.3713 26.5183 42.3743 26.7514 42.3743 26.9846C42.3743 34.0542 37.4012 42.2157 28.3071 42.2157C25.5135 42.2157 22.9159 41.3253 20.7273 39.8096C21.1142 39.852 21.5071 39.8839 21.906 39.8839C24.2223 39.8839 26.3556 39.0252 28.0478 37.5837C25.8843 37.5519 24.0575 35.9939 23.4274 33.874C23.7299 33.9376 24.0414 33.9695 24.3599 33.9695C24.8091 33.9695 25.2452 33.906 25.6632 33.7788C23.3993 33.2912 21.694 31.1291 21.694 28.5323C21.694 28.5005 21.694 28.4898 21.694 28.4686C22.3612 28.8608 23.1249 29.1045 23.9359 29.1363C22.6074 28.1717 21.7342 26.5289 21.7342 24.6741C21.7342 23.699 21.9774 22.7768 22.4054 21.9819C24.8433 25.2252 28.488 27.3556 32.5969 27.5782C32.5125 27.1861 32.4693 26.7728 32.4693 26.3594C32.4693 23.4023 34.683 21.0068 37.4142 21.0068C38.8361 21.0068 40.1204 21.6535 41.0217 22.6922C42.1502 22.459 43.2074 22.0139 44.164 21.3991C43.7932 22.6498 43.0104 23.6989 41.9874 24.3561C42.9883 24.2289 43.9429 23.9429 44.8282 23.5189C44.164 24.5895 43.3279 25.5326 42.3623 26.2852Z" fill="white"/>
                        </svg>

                        <svg className='w-[25spx] sm:w-[40px] lg:w-[64px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="32" cy="32" r="31.5" fill="white" stroke="white"/>
                        <path d="M41.2411 23.5111C39.5415 22.7312 37.7189 22.1566 35.8132 21.8276C35.7785 21.8212 35.7438 21.8371 35.726 21.8688C35.4916 22.2857 35.2319 22.8296 35.0501 23.2571C33.0004 22.9503 30.9613 22.9503 28.9537 23.2571C28.7718 22.8201 28.5028 22.2857 28.2673 21.8688C28.2494 21.8381 28.2148 21.8223 28.1801 21.8276C26.2755 22.1556 24.4528 22.7302 22.7522 23.5111C22.7374 23.5174 22.7248 23.528 22.7164 23.5418C19.2593 28.7066 18.3123 33.7445 18.7769 38.7199C18.779 38.7443 18.7926 38.7675 18.8116 38.7824C21.0925 40.4574 23.3019 41.4743 25.4703 42.1483C25.505 42.1589 25.5418 42.1462 25.5639 42.1177C26.0768 41.4172 26.534 40.6786 26.9261 39.9019C26.9492 39.8564 26.9272 39.8024 26.8799 39.7844C26.1546 39.5093 25.464 39.1739 24.7997 38.7929C24.7472 38.7623 24.743 38.6871 24.7913 38.6511C24.9311 38.5464 25.0709 38.4374 25.2044 38.3274C25.2286 38.3072 25.2622 38.303 25.2906 38.3157C29.6548 40.3082 34.3795 40.3082 38.6922 38.3157C38.7206 38.302 38.7542 38.3062 38.7794 38.3263C38.9129 38.4363 39.0527 38.5464 39.1936 38.6511C39.2419 38.6871 39.2388 38.7623 39.1862 38.7929C38.5219 39.1813 37.8313 39.5093 37.105 39.7834C37.0577 39.8014 37.0367 39.8564 37.0598 39.9019C37.4603 40.6775 37.9175 41.4161 38.421 42.1166C38.442 42.1462 38.4799 42.1589 38.5146 42.1483C40.6935 41.4743 42.9029 40.4574 45.1838 38.7824C45.2038 38.7675 45.2164 38.7453 45.2185 38.721C45.7745 32.9689 44.2872 27.9723 41.2758 23.5428C41.2685 23.528 41.2558 23.5174 41.2411 23.5111ZM27.5778 35.6904C26.2639 35.6904 25.1813 34.4841 25.1813 33.0027C25.1813 31.5213 26.2429 30.315 27.5778 30.315C28.9232 30.315 29.9953 31.5319 29.9743 33.0027C29.9743 34.4841 28.9127 35.6904 27.5778 35.6904ZM36.4386 35.6904C35.1247 35.6904 34.0421 34.4841 34.0421 33.0027C34.0421 31.5213 35.1037 30.315 36.4386 30.315C37.784 30.315 38.8562 31.5319 38.8351 33.0027C38.8351 34.4841 37.784 35.6904 36.4386 35.6904Z" fill="white"/>
                        </svg>

                        <svg className='w-[25spx] sm:w-[40px] lg:w-[64px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="32" cy="32" r="31.5" fill="white" stroke="white"/>
                        <path d="M36.182 26.8694C35.0187 25.7464 33.5391 25.1746 31.8912 25.1746C28.9677 25.1746 26.4932 27.1682 25.6105 29.847C25.386 30.527 25.2585 31.2534 25.2585 32.0004C25.2585 32.7473 25.386 33.4737 25.6105 34.1536C26.4932 36.8324 28.9677 38.8261 31.8912 38.8261C33.4014 38.8261 34.6871 38.4243 35.6922 37.7443C36.8809 36.9406 37.6718 35.7404 37.932 34.3237H31.8911V29.9398H42.4626C42.5952 30.6816 42.6667 31.4543 42.6667 32.2579C42.6667 35.7095 41.4422 38.6149 39.3197 40.588C37.4626 42.3188 34.9217 43.3337 31.8912 43.3337C27.5034 43.3337 23.7075 40.794 21.8606 37.0901C21.1004 35.5601 20.6667 33.8292 20.6667 32.0004C20.6667 30.1716 21.1003 28.4407 21.8605 26.9107C23.7075 23.2067 27.5034 20.667 31.8912 20.667C34.9167 20.667 37.4575 21.79 39.4014 23.6188L36.182 26.8694Z" fill="white"/>
                        </svg>

                        <svg className='w-[25spx] sm:w-[40px] lg:w-[64px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="32" cy="32" r="31.5" fill="white" stroke="white"/>
                        <path d="M40.434 23.4839L21.1685 30.9146C19.8536 31.4422 19.8614 32.1756 20.9288 32.5026L25.7337 34.0023L27.5721 39.6389C27.7956 40.2558 27.6854 40.5005 28.3333 40.5005C28.8332 40.5005 29.055 40.2725 29.3335 40.0005C29.5105 39.8273 30.5619 38.8051 31.7357 37.6638L36.7337 41.3565C37.6534 41.8639 38.3175 41.601 38.5465 40.5023L41.8273 25.042C42.1632 23.6954 41.3139 23.0845 40.434 23.4839ZM26.4877 33.6578L37.3179 26.8249C37.8586 26.497 38.3543 26.6733 37.9473 27.0346L28.6738 35.4016L28.3127 39.2528L26.4877 33.6578Z" fill="white"/>
                        </svg>
                        <svg className='w-[25spx] sm:w-[40px] lg:w-[64px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.1" cx="32" cy="32" r="31.5" fill="white" stroke="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 32C20 37.9333 24.3333 42.8667 30 43.8667L30.0669 43.8132C30.0446 43.8088 30.0223 43.8045 30 43.8V35.3333H27V32H30V29.3333C30 26.3333 31.9333 24.6667 34.6667 24.6667C35.5333 24.6667 36.4667 24.8 37.3333 24.9333V28H35.8C34.3333 28 34 28.7333 34 29.6667V32H37.2L36.6667 35.3333H34V43.8C33.9777 43.8045 33.9554 43.8088 33.9331 43.8132L34 43.8667C39.6667 42.8667 44 37.9333 44 32C44 25.4 38.6 20 32 20C25.4 20 20 25.4 20 32Z" fill="white"/>
                        </svg>
                        </div>
                    </div>
                    <div className='col-span-6 sm:col-span-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-center gap-[30px]'>
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[22px] hover:text-[#ABE004] duraction-300 xl:mb-[28px] feature'>Funding Programs</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>2-Step</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>1-Step</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>No-evaluation</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 feature mb-[8px] md:mb-[12px] xl:mb-[16px]'>Success stories</li>
                            <li className='meedicalkitslist feature hover:text-[#ABE004] duraction-300'>Become an affiliate</li>
                        </ul>
                    </div>
                    
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[22px] xl:mb-[28px] hover:text-[#ABE004] duraction-300'>Resources</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Academy</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>FAQs</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Blog</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px]'>Calculators</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 '>Sky trade manager</li>
                        </ul>
                    </div>
                    <div className='col-span-2 flex sm:justify-center'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[22px] xl:mb-[28px] feature hover:text-[#ABE004] duraction-300'>More</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>About us</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Partners</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Media kit</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 mb-[8px] md:mb-[12px] xl:mb-[16px] feature'>Merchandise</li>
                            <li className='meedicalkitslist hover:text-[#ABE004] duraction-300 '>Symbols specifications</li>
                        </ul>
                    </div>
                    <div className='col-span-2 flex sm:justify-centercenter'>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais mb-[16px] md:mb-[22px] xl:mb-[28px] feature hover:text-[#ABE004] duraction-300'>Contact</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature hover:text-[#ABE004] duraction-300'>Dubai silicon oasis, DDP, building A2, dubai, united arab emirates.</li>
                            <li className='meedicalkitslist mb-[8px] md:mb-[12px] xl:mb-[16px] feature hover:text-[#ABE004] duraction-300'>Support@example@gmail.com</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex justify-between items-center pb-[20px] md:pb-[30px] xl:pb-[40px] pt-[16px] md:pt-[25px] xl:pt-[32px] border-t-[1px] border-[#232221]'>
                    <div className='flex items-center gap-[12px] md:gap-[16px] xl:gap-[20px]'>
                        <p className='privacypolicy'>Copyright © 2024 Skyline prop firm. All Rights Reserved.</p>
                    </div>
                    <div className='flex items-center gap-[8px] md:gap-[12px] xl:gap-[16px]'>
                        <p className='privacypolicy'>Privacy Policy</p>
                        <p className='privacypolicy'>Terms of Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;