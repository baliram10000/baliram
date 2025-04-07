import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import normal from '../assets/normal.png';
import dryClean from '../assets/dryClean.png';
import easyWash from '../assets/easyWash.png';
import blanket from '../assets/blanket.png';
import bag from '../assets/bag.png';
import shoes from '../assets/shoes.png';
import Navbar from '../components/Navbar';

function Order() {
    const [selected, setSelected] = useState('normal');

    const handleSelect = (item) => {
        setSelected(item);
    };

    return (
        <div className='px-2 md:px-10 py-2 md:py-10 md:h-[100vh] flex flex-col md:flex-row gap-2 md:gap-10'>
            <div className='md:w-[30%]'>
                <Navbar/>
                <div className='mt-2 md:mt-5 md:py-9 rounded-4xl grid gap-2 md:gap-5 grid-cols-3 md:grid-cols-3'>
                    <Link to={'/order'}
                        onClick={() => handleSelect('normal')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'normal' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={normal} alt="normal" className='w-6 md:w-20' /></div>
                        <div className='poppins-medium text-stone-700 text-center text-[11px] md:text-[15px]'>Normal <br className='hidden md:block' /> <span className='hidden md:block'>Cloths</span> 
                        {/* <br />25 per/kg */}
                        </div>
                    </Link>

                    <Link to={'/order/dry-clean'}
                        onClick={() => handleSelect('dryClean')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'dryClean' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={dryClean} alt="dryClean" className='w-6 md:w-20' /></div>
                        <div className='text-center poppins-medium text-stone-700 text-[11px] md:text-[15px]'>Dry <br className='hidden md:block' />Clean</div>
                    </Link>

                    <Link to={'/order/easy-wash'}
                        onClick={() => handleSelect('easyWash')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'easyWash' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={easyWash} alt="easyWash" className='w-6 md:w-20' /></div>
                        <div className='text-center poppins-medium text-stone-700 text-[11px] md:text-[15px]'>Easy <br className='hidden md:block' />Wash</div>
                    </Link>

                    <Link to={'/order/blanket'}
                        onClick={() => handleSelect('blanket')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'blanket' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={blanket} alt="blanket" className='w-6 md:w-20' /></div>
                        <div className='text-center poppins-medium text-stone-700 text-[11px] md:text-[15px]'>Blanket <br className='hidden md:block' /><span className='hidden md:block'>Wash</span></div>
                    </Link>

                    <Link to={'/order/bag'}
                        onClick={() => handleSelect('bag')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'bag' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={bag} alt="bag" className='w-6 md:w-20' /></div>
                        <div className='text-center poppins-medium text-stone-700 text-[11px] md:text-[15px]'>Bags <br className='hidden md:block' />Wash</div>
                    </Link>

                    <Link to={'/order/shoes'}
                        onClick={() => handleSelect('shoes')}
                        className={`border border-blue-200 bg-blue-50 py-3 md:py-5 rounded-xl md:rounded-2xl flex md:flex-col flex-row gap-2 justify-center items-center cursor-pointer ${selected === 'shoes' ? 'outline-2 md:outline-3 outline-blue-400' : ''}`}
                    >
                        <div className='text-stone-600'><img src={shoes} alt="shoes" className='w-6 md:w-20' /></div>
                        <div className='text-center poppins-medium text-stone-700 text-[11px] md:text-[15px]'>Shoes <br className='hidden md:block' />Wash</div>
                    </Link>
                </div>
            </div>
            <div className='py-10 md:p-5 flex-1 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    );
}

export default Order;
