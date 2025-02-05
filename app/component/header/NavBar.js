"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import logo1 from '../image/logo1.png';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='relative z-30'>
            <header className='roundermine mt-[20px] container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[18px] md:px-[22px] lg:px-[26px] xl:px-[28px] 2xl:px-[32px]'>
                <div className='sm:hidden relative top-[-11px] '>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-[#9C9D9F] text-[25px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-[#9C9D9F] text-[25px] absolute' />
                    </div>
                </div>
                <Link href="*" className='Froggo-Logo w-[50.926px] 2xl:w-[86px]'><Image src={logo1} alt=''/></Link>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] sm:bg-transparent bg-[#FFFFFF] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="#home">Home</Link>
                    <Link className={`Link-manu-bar`} href="#Challenge">Challenge</Link>
                    <Link className='Link-manu-bar' href="#Technology">Instant Funding</Link>
                    <Link className='Link-manu-bar' href="#Team">About Us</Link>
                    <Link className={`Link-manu-bar flex justify-center items-center gap-[7px] lg:gap-[10px]`} href="#Relations">More
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z" fill="white"/>
                    <path d="M12.5 15.51C12.31 15.51 12.12 15.44 11.97 15.29L8.44003 11.76C8.15003 11.47 8.15003 10.99 8.44003 10.7C8.73003 10.41 9.21003 10.41 9.50003 10.7L12.5 13.7L15.5 10.7C15.79 10.41 16.27 10.41 16.56 10.7C16.85 10.99 16.85 11.47 16.56 11.76L13.03 15.29C12.88 15.44 12.69 15.51 12.5 15.51Z" fill="#9C9D9F"/>
                    </svg>
                    </Link>
                </nav>

                
                <ul className=' manu-sosul-area'>
                        <button className='contactusbtn'>SIGN UP</button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;