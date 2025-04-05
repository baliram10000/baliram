import React from 'react'
import Navbar from '../Navbar'
import heroimage from '../../assets/heroimage.png'

import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { TbWash } from "react-icons/tb";
import { Link } from 'react-router-dom';

import normal from '../../assets/normal.png';

function Hero() {
    return (
        <div className='p-2 lg:px-10 lg:py-10 lg:flex gap-10 text-stone-800'>
            <div className='lg:w-[60%]'>
                <Navbar />
                <div className='mt-2 md:mt-5 p-3 py-5 md:p-9 rounded-3xl md:rounded-4xl bg-blue-100'>
                    <div className='flex mb-4 w-fit shadow-xl shadow-blue-200 items-center border border-blue-200 rounded-full text-sm md:text-base bg-stone-50 overflow-hidden poppins-semibold text-stone-600'>
                        <div className='w-16 md:w-20 py-1 md:py-2 bg-blue-300 flex justify-center items-center'><img src={normal} alt="normal" className='w-5 md:w-8' /></div>
                        <div className='px-3 md:px-5 flex items-center'>Affordable, Fast and Best</div>
                    </div>
                    <div className='lilita-one-regular text-5xl md:text-7xl lg:text-8xl'> Best Washing with <span className='text-blue-600'>Fast</span> and <span className='text-blue-600'>Free</span> Delivery</div>
                    <div className='mt-3 lg:mt-4 poppins-regular text-sm md:text-lg text-stone-600'><span className='font-semibold text-stone-700'>Law gate's first</span> and best laundry. <br /> Starting at just <span className='font-semibold text-stone-700'>25/- per kg</span></div>
                    <div className='w-full justify-center'>
                        <Link to={'/order'}>
                            <button className='mt-7 md:mt-5 text-stone-50 px-4 py-3 md:px-7 md:py-4 w-fit md:text-lg poppins-medium rounded-full shadow-md md:shadow-lg shadow-stone-400 flex items-center transition-all hover:scale-105'>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span className="ml-2">Book Your Order</span>
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 md:gap-0 justify-between mt-5 md:mt-10 items-center'>
                        <div className=' p-4 lg:p-6 rounded-3xl flex gap-5 md:gap-9 items-center'>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <TbTruckDelivery className='text-3xl md:text-5xl' />
                                <div className='text-sm md:text-lg poppins-regular text-center'>Pickup in <br /> 10 min</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <GiReceiveMoney className='text-3xl md:text-5xl' />
                                <div className='text-sm md:text-lg poppins-regular text-center'>Affordable <br /> Price</div>
                            </div>
                            <div className='w-[1.8px] h-10 bg-stone-500 rounded-full'></div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <TbWash className='text-3xl md:text-5xl' />
                                <div className='text-sm md:text-lg poppins-regular text-center'>Surfexel <br /> Wash</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col justify-end overflow-hidden'>
                <img src={heroimage} alt="heroimage" />
            </div>
        </div>
    )
}

export default Hero