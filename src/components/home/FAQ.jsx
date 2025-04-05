import React from 'react';
import { FaPhoneAlt, FaMapMarker } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { BsClockFill } from "react-icons/bs";
import contactImage from "../../assets/contactimge.png";

const contactDetails = [
    {
        icon: <FaPhoneAlt size={28} />, 
        title: "Contact", 
        details: ["+91 8578938248", "+91 9110199310"]
    },
    {
        icon: <IoMailUnread size={28} />, 
        title: "Email", 
        details: ["baliram10000@gmail.com"],
        border: true
    },
    {
        icon: <FaMapMarker size={28} />, 
        title: "Address", 
        details: ["Law gate, LPU, Phagwara, Jalandhar", "Landmark - Opposite of Ashiana PG"],
        border: true
    },
    {
        icon: <BsClockFill size={28} />, 
        title: "Working Hour", 
        details: ["Monday-Sunday 9:00 AM to 11:00 PM"]
    }
];

function FAQ() {
    return (
        <div className='px-4 md:px-10 lg:px-20 py-10 mt-20 flex flex-col md:flex-row justify-between gap-10'>
            <div className='w-full lg:w-[45%]'>
                <div className='text-3xl md:text-5xl lilita-one-regular'>Contact <span className='text-blue-500'>Us</span></div>
                <div className='bg-blue-100 rounded-4xl p-3 md:p-8 mt-10 flex flex-col'>
                    {contactDetails.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center gap-8 py-3 ${item.border ? 'border-y-2 border-blue-300 border-dashed' : ''}`}
                        >
                            <div className='p-3 md:p-5 rounded-full bg-stone-50 w-fit text-blue-500'>
                                {item.icon}
                            </div>
                            <div>
                                <div className='text-lg poppins-medium'>{item.title}</div>
                                {item.details.map((detail, i) => (
                                    <div key={i} className='poppins-regular text-stone-800 text-sm md:text-lg'>{detail}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex-1 flex justify-center items-end'>
                <img src={contactImage} alt="contact image" className='w-[30rem]' />
            </div>
        </div>
    );
}

export default FAQ;