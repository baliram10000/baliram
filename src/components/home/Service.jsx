import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import first from '../../assets/firstimage.jpeg';
import second from '../../assets/secondimage.jpeg';
import third from '../../assets/thirdimage.jpeg';

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
                <div className='rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-blue-200'>
                    <img src={first} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-blue-200'>
                    <img src={second} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-blue-200'>
                    <img src={third} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Service;
