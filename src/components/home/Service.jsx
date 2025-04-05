import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Service() {
    return (
        <div className='p-5 lg:px-20 lg:py-10 mt-20'>
            <div className='lg:flex justify-between items-center'>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl md:text-5xl lilita-one-regular'>Why <span className='text-blue-500'>Us??</span></h2>
                    <ul className='text-sm md:text-lg mt-4 md:mt-5 poppins-regular text-stone-700 space-y-2'>
                        {[
                            "We Offer the widest variety of cleaning",
                            "Most Affordable price in the whole area.",
                            "We use best machines and washing products.",
                            "We deliver your clothes on the 3rd day after Pickup"
                        ].map((item, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <div className='p-1 bg-blue-500 rounded-full text-stone-50'>
                                    <IoIosArrowForward className='text-sm md:text-lg' />
                                </div>
                                <span className='poppins-medium text-stone-600'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='mt-10 md:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-9'>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className='w-full h-52 md:h-[330px] rounded-2xl md:rounded-[40px] flex flex-col justify-end overflow-hidden bg-cover bg-center' 
                        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className='flex justify-between items-center py-2 px-3 md:pl-6 md:rounded-full bg-stone-800/55 backdrop-blur-3xl'>
                            <span className='md:text-lg poppins-regular text-stone-50 py-4'>Laundry</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
