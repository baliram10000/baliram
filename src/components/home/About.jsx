import React from 'react'

import { FaBookmark } from "react-icons/fa6";

function About() {
    return (
        <div className='mx-5 lg:mx-20 px-4 md:px-10 lg:px-20 py-10 md:py-20 mt-20 bg-blue-50 rounded-4xl md:rounded-[90px]'>
            <div className='text-center text-3xl md:text-5xl lilita-one-regular'>About <span className='text-blue-500'>Us </span></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10 md:mt-20'>
                <div>
                    <div className='text-2xl md:text-4xl poppins-medium'><span className='text-blue-500 poppins-semibold'>Baliram Laundry</span> is the very first Laundry in Law gate establish by <span className='text-blue-500 poppins-semibold'>Mr. Baliram Kumar Gupta</span></div>
                    <div className='mt-3 poppins-regular text-stone-800 text-sm md:text-[16px]'>We take year of your cloths from pikup till it's Delivery and take care that all of your items are delivered and cleaned with care.</div>
                    <div className='mt-7 md:mt-16 flex flex-col gap-5 md:gap-8'>
                        <div className='flex gap-5'>
                            <FaBookmark size={25} />
                            <div className='flex-1 poppins-regular'>
                                <div className='text-xl poppins-medium'>7+ Years of Experience</div>
                                <div className='poppins-light text-stone-700 mt-2 text-sm md:text-lg'>We have fabricated our services and washing process with all our prior experience in such a way that that everything is orginazed and the end result gives the best washed cloths as soon as possible. <br /> <br />

                                Our experience in this field has taught us that every customer is different and has different needs. We are always ready to help you with your laundry needs.
                                </div>
                            </div>
                        </div>

                        {/* <div className='flex gap-5'>
                            <FaBookmark size={25} />
                            <div className='flex-1 poppins-regular'>
                                <div className='text-xl poppins-medium'>15+ Years of Experience</div>
                                <div className='poppins-light text-stone-700 mt-2 text-sm md:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis accusantium nihil officia perferendis eaque commodi corporis explicabo numquam eos, sint repellendus nobis iure eius ratione distinctio error impedit, quasi cupiditate!</div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='rounded-3xl' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cheerful-curly-haired-young-busy-woman-wears-snorkeling-mask-diving-has-lot-laundry-make-does-housework-drowned-multicolored-clothes-against-blue-wall_273609-53198.jpg?t=st=1741960759~exp=1741964359~hmac=0a261bf368628fd63528daddd00f36de3115c882e037d9f96798e021a4cf8421&w=1380)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
            </div>
        </div>
    )
}

export default About