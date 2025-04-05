import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addItem, incrementItem, decrementItem, toggleIron } from '../../Redux/orderslice';
import { TbIroning3Filled } from "react-icons/tb";

function Card({ title, image, price, description, isIron, category }) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.order.items.find(item => item.title === title));
    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [isIronButton, setIsIronButton] = useState(false);

    const handleIronButton = (e) => {
        e.preventDefault(); // Prevent default behavior for touch events
        setIsIronButton(!isIronButton);

        // Dispatch toggleIron action to update the ironing option in the Redux store
        if (inCart) {
            dispatch(toggleIron({ title }));
        }
    };

    useEffect(() => {
        if (cartItem) {
            setInCart(true);
            setQuantity(cartItem.quantity);
            setIsIronButton(cartItem.ironCloth || false); // Set ironing state from the cart
        } else {
            setInCart(false);
            setQuantity(0);
            setIsIronButton(false);
        }
    }, [cartItem]);

    const handleAddToCart = () => {
        dispatch(addItem({ title, image, price, description, isIron, ironCloth: isIronButton, category }));
    };

    const handleIncrement = () => {
        dispatch(incrementItem({ title }));
    };

    const handleDecrement = () => {
        dispatch(decrementItem({ title }));
    };

    return (
        <div className='md:shadow-stone-300 rounded-xl md:rounded-3xl bg-stone-10'>
            <div className='rounded-t-xl md:rounded-t-3xl h-24 md:h-56' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='py-3'>
                <div className='flex justify-between items-center lilita-one-regular'>
                    <div className='lilita-one-regular text-[16px] md:text-3xl'>{title}</div>
                    <div className='text-[16px] md:text-3xl'>{price} <span className='text-blue-500 text-[11px] md:text-sm'>{category=='Normal-cloths' ? 'Rs/Kg':'Rs/Piece'}</span></div>
                </div>
            </div>
            <div className='flex justify-between gap-x-2 items-center'>
                <div className='flex-1 flex poppins-medium transition-all duration-300'>
                    {inCart ? (
                        <div className='w-full h-10 md:h-14 flex justify-between items-center transition-all duration-300'>
                            <div onClick={handleDecrement} className='flex h-full aspect-square justify-center items-center rounded-l-lg bg-[royalblue] text-blue-50 py-2 md:py-4 cursor-pointer hover:scale-110 transition-all duration-300 text-sm md:text-xl px-2'><FaMinus /></div>
                            <div className='col-span-2 flex justify-center items-center text-lg'>{quantity}</div>
                            <div onClick={handleIncrement} className='flex h-full aspect-square justify-center items-center rounded-r-lg bg-[royalblue] text-blue-50 py-2 md:py-4 cursor-pointer hover:scale-110 transition-all duration-300 text-sm md:text-xl px-2'><FaPlus /></div>
                        </div>
                    ) : (
                        <button onClick={handleAddToCart} className='w-full h-10 md:h-14 bg-[royalblue] text-sm md:text-xl hover:bg-red-500 flex justify-center items-center text-blue-50 py-2 md:py-4 md:px-6 rounded-lg transition-all duration-300'>Add to Cart</button>
                    )}
                </div>
                {quantity > 0 && isIron && (
                    <div
                        onClick={handleIronButton}
                        className={`h-10 md:h-14 aspect-square flex justify-center items-center border rounded-lg cursor-pointer transition-all duration-200 ${
                            isIronButton ? 'bg-[royalblue] text-white border-blue-500' : 'bg-blue-100 text-stone-700 border-blue-300'
                        }`}
                    >
                        <TbIroning3Filled className='text-xl md:text-3xl' />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;