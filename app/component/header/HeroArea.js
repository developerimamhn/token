import React from 'react';
import Image from 'next/image';
import image2 from '../image/image2.png';



const HeroArea = () => {
    return (
        <div className='container mx-auto px-[24px] sm:px-[0] overflow-hidden'>
            <div className='mb-[40px] sm:mb-[50px] lg:mb-[70px] 2xl:mb-[100px] flex flex-col justify-center items-center mt-[50px] md:mt-[70px] lg:mt-[100px] xl:mt-[120px] 2xl:mt-[164px]'>
                <span className='Construction block'>LEADING PROP FIRM SINCE 2018</span>
                <h2 className='Printing'>Your reliable partner to <br/> risk-free funding</h2>
                <p className='accouno mt-[16] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[35px]'>We help traders without capital earn rewards of up to 100% simulated profits <br className='sm:block hidden'/> using our prop firm's demo accounts—with no liability for risk.</p>
                <button className='buttonstli'>START TRADING
                </button>
            </div>
            <Image className='object-cover w-full 2xl:-mt-[240px]' src={image2} alt=''/>
        </div>
    );
};

export default HeroArea;