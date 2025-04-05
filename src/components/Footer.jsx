import React from 'react';

function Footer() {
  return (
    <div className='mt-20 md:mx-10 bg-cyan-950 rounded-t-4xl md:rounded-t-[90px] px-10 lg:px-20 py-12'>
      <div className='text-center text-3xl md:text-5xl lilita-one-regular text-stone-50'>Baliram Laundry</div>
      <div className='mt-5 md:mt-10 flex justify-center items-center'>
        <div className='poppins-regular lg:w-[70%] text-sm md:text-[16px] lg:text-lg text-center text-cyan-100'>Wear Fresh and Feel Fresh</div>
      </div>
      <div className='py-6 border-y border-dashed border-cyan-100 mt-5 md:mt-16 flex justify-center items-center gap-7 md:gap-16 text-cyan-100 flex-wrap'>
        <a href="#hero" className='text-sm md:text-lg poppins-medium cursor-pointer hover:underline'>Home</a>
        <a href="#service" className='text-sm md:text-lg poppins-medium cursor-pointer hover:underline'>Why Us?</a>
        <a href="#about" className='text-sm md:text-lg poppins-medium cursor-pointer hover:underline'>About Us</a>
        <a href="#faq" className='text-sm md:text-lg poppins-medium cursor-pointer hover:underline'>Contact</a>
      </div>
      <div className='pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5'>
        <div className='poppins-medium text-cyan-300 text-sm'>© Powered By <a href="https://helmer.world/" target='_blank' className='underline'>Helmer</a></div>
      </div>
    </div>
  );
}

export default Footer;