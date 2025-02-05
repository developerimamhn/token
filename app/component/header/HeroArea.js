'use client'


import React, {useEffect} from 'react';
import Image from 'next/image';
import image2 from '../image/image2.png';



const HeroArea = () => {
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
        <div className='container mx-auto px-[24px] sm:px-[0] overflow-hidden'>
            <div className='mb-[40px] sm:mb-[50px] lg:mb-[70px] 2xl:mb-[100px] flex flex-col justify-center items-center mt-[50px] md:mt-[70px] lg:mt-[100px] xl:mt-[120px] 2xl:mt-[164px]'>
                <span className='Construction block fatchanimactionright'>LEADING PROP FIRM SINCE 2018</span>
                <h2 className='Printing fatchanimactionright'>Your reliable partner to <br/> risk-free funding</h2>
                <p className='accouno mt-[16] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[35px] fatchanimactionright'>We help traders without capital earn rewards of up to 100% simulated profits <br className='sm:block hidden'/> using our prop firm's demo accounts—with no liability for risk.</p>
                <button className='buttonstli fatchanimactionright'>START TRADING
                </button>
            </div>
            <Image className='object-cover w-full 2xl:-mt-[240px] fatchanimactionright       ' src={image2} alt=''/>
        </div>
    );
};

export default HeroArea;