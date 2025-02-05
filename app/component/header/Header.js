import React from 'react';
import NavBar from './NavBar';
import HeroArea from './HeroArea';
import Image from 'next/image';
import image1 from '../image/image1.png';

const Header = () => {
    return (
        <div className='relative overflow-hidden'> 
                <Image className='absolute top-[80px] sm:top-0 w-full -z-[2] object-cover opacity-50 sm:opacity-100' src={image1} alt=''/>
                <div className='overlayheader w-full h-full absolute top-0
                -z-[1]'></div>
            <NavBar/>
            <HeroArea/>
        </div>
    );
};

export default Header;