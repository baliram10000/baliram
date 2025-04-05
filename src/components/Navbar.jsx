import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiMiniShoppingCart } from "react-icons/hi2";
import Cart from './cart/Cart';

import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [address, setAddress] = useState({
    roomNo: '',
    pgName: '',
    option: '',
    landmark: '',
    fullAddress: ''
  });
  const [error, setError] = useState(''); // Error message state
  const cartItems = useSelector(state => state.order.items);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmOrder = () => {
    // Validate required fields
    if (!address.pgName || !address.option || !address.fullAddress) {
      setError('Please fill in all required fields.');
      return;
    }

    // Clear the error if validation passes
    setError('');

    // Group items by category
    const groupedItems = cartItems.reduce((acc, item) => {
      const category = item.category || "Uncategorized"; // Fallback for missing category
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Format the message
    let message = `🧺 Hey, I want to deliver some clothes to Baliram Laundry.\n\n📋 *Details:*\n`;
    Object.keys(groupedItems).forEach(category => {
      message += `\n*${category}:*\n`;
      groupedItems[category].forEach((item, index) => {
        message += `${index + 1}. ${item.title}: ${item.quantity} ${item.quantity > 1 ? "pieces" : "piece"}${item.ironCloth ? " (Ironing)" : ""}\n`;
      });
    });

    const totalPieces = cartItems.reduce((total, item) => total + item.quantity, 0);
    message += `\nTotal pieces: ${totalPieces}`;

    // Add address details
    message += `\n\n📍 *Address:*\n`;
    if (address.roomNo) message += `- Room No: ${address.roomNo}\n`;
    if (address.pgName) message += `- PG/Building Name: ${address.pgName}\n`;
    if (address.option) message += `- Location: ${address.option}\n`;
    if (address.landmark) message += `- Landmark: ${address.landmark}\n`;
    if (address.fullAddress) message += `- Address Lane 2: ${address.fullAddress}\n`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/9060557296?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen]);

  return (
    <div className='relative'>
      <div className='flex justify-between items-center p-2 px-2 md:p-3 md:pl-5 rounded-full border border-blue-200 bg-blue-50'>
        <Link to={'/'} className='lilita-one-regular flex items-center gap-1 text-xl md:text-3xl'>
          <img src={logo} alt="logo" className='w-9' />
          Baliram Laundry
        </Link>
        {location.pathname.startsWith('/order') && (
          <div onClick={toggleCart} className='bg-[royalblue] poppins-medium cursor-pointer text-stone-50 text-lg p-2 md:p-3 rounded-full shadow-lg shadow-stone-400 hover:scale-110 transition-all duration-150 relative'>
            <HiMiniShoppingCart className='md:text-xl' />
            <div className='absolute bg-stone-200 shadow border border-stone-300 top-[-5px] left-[-9px] text-stone-800 poppins-medium w-5 lg:w-6 aspect-square flex justify-center items-center rounded-full text-[10px] lg:text-[15px]'>{cartItems.length}</div>
          </div>
        )}
      </div>
      {isCartOpen && (
        <>
          <div className='fixed inset-0 bg-stone-600/70 px-10 backdrop-blur-lg bg-opacity-50 z-40' onClick={toggleCart}></div>
          <div className='fixed inset-0 flex px-2 items-center justify-center z-50'>
            <div className='bg-white border border-stone-300 shadow-lg rounded-lg p-4 w-full lg:w-[600px] h-[550px] overflow-auto flex flex-col justify-between'>
              <Cart />
              <div className='mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Enter Address</h3>
                <input
                  type='text'
                  name='roomNo'
                  placeholder='Room No (Optional)'
                  value={address.roomNo}
                  onChange={handleAddressChange}
                  className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                  type='text'
                  name='pgName'
                  placeholder='PG/Building Name (Required)'
                  value={address.pgName}
                  onChange={handleAddressChange}
                  className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <select
                  name='option'
                  value={address.option}
                  onChange={handleAddressChange}
                  className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                >
                  <option value=''>Select Location (Required)</option>
                  <option value='Law Gate'>Law Gate</option>
                  <option value='Green Valley'>Green Valley</option>
                  <option value='Bhutani Colony'>Bhutani Colony</option>
                  <option value='Main Gate'>Main Gate</option>
                  <option value='Maheru'>Maheru</option>
                </select>
                <input
                  type='text'
                  name='landmark'
                  placeholder='Landmark (Optional)'
                  value={address.landmark}
                  onChange={handleAddressChange}
                  className='w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <textarea
                  name='fullAddress'
                  placeholder='Address Lane 2 (Required)'
                  value={address.fullAddress}
                  onChange={handleAddressChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
                {error && <div className='text-red-500 text-sm mt-2'>{error}</div>}
              </div>
              <div className='flex justify-between items-center gap-4 mt-5'>
                <div onClick={toggleCart} className='bg-red-400 shadow-lg poppins-medium shadow-stone-300 text-stone-50 px-4 lg:px-5 py-3 lg:py-4 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer'>Close</div>
                <button
                  onClick={handleConfirmOrder}
                  disabled={!address.pgName || !address.option || !address.fullAddress}
                  className={`flex-1 flex justify-center items-center ${
                    !address.pgName || !address.option || !address.fullAddress
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 hover:scale-110'
                  } shadow-lg poppins-medium shadow-stone-300 text-stone-50 px-4 lg:px-5 py-3 lg:py-4 rounded-lg transition-all duration-300`}
                >
                  Confirm Your Order
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;