import React from 'react';

const Page1 = () => {
    return (
        <div className='bg-[#08090B] pt-[40px] md:pt-[60px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[150px] pb-[33px] sm:pb-[44px] md:pb-[55px] lg:pb-[66px] xl:pb-[77px] 2xl:pb-[84px]'>
            <h2 className='Printing !text-[25px] sm:!text-[30px] md:!text-[40px] lg:!text-[45px] xl:!text-[55px] 2xl:!text-[64px]'>Funding programs</h2>
            <p className='accouno mt-[16px] sm:mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[40px] !text-[clamp(15px,_2vw,_24px)] pb-[33px] sm:pb-[44px] md:pb-[55px] lg:pb-[66px] xl:pb-[77px] 2xl:pb-[84px]'>Don’t let your trading skills go unrewarded. prove yourself <br className='sm:block hidden'/> and secure funding with our risk-free plans.</p>
            <div className='flex justify-center items-center gap-[10px] lg:gap-[16px]'>
                <button className='challenfunding'>Challenge</button>
                <button className='challenfunding'>Instant Funding</button>
            </div>
        </div>
    );
};

export default Page1;