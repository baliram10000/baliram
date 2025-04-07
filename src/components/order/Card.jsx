import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { addItem, incrementItem, decrementItem, toggleIron } from '../../Redux/orderslice';
import { TbIroning3Filled } from "react-icons/tb";
import Skeleton from 'react-loading-skeleton';
import toast from 'react-hot-toast';

function Card({ title, image, price, description, isIron, category }) {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.order.items.find(item => item.title === title));
    const [inCart, setInCart] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [isIronButton, setIsIronButton] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleIronButton = (e) => {
        e.preventDefault();
        const updatedIronCloth = !isIronButton; // Reflect the toggled state
        setIsIronButton(updatedIronCloth);

        if (inCart) {
            dispatch(toggleIron({ title }));
            if (updatedIronCloth) {
                toast.custom((t) => (
                    <div
                        className={`${t.visible ? 'animate-enter' : 'animate-leave'
                            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                    >
                        <div className="flex-1 w-0 p-4">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-0.5">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        {title}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Ironing added! ₹5 per piece for ironing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-l border-gray-200">
                            <button
                                onClick={() => toast.dismiss(t.id)}
                                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                ));
            }
        }
    };

    useEffect(() => {
        if (cartItem) {
            setInCart(true);
            setQuantity(cartItem.quantity);
            setIsIronButton(cartItem.ironCloth || false);
        } else {
            setInCart(false);
            setQuantity(0);
            setIsIronButton(false);
        }
    }, [cartItem]);

    const handleAddToCart = () => {
        dispatch(addItem({ title, image, price, description, isIron, ironCloth: isIronButton, category }));
        toast.success(`${title} added to cart!`);
    };

    const handleIncrement = () => {
        dispatch(incrementItem({ title }));
        // toast.success(`${title} quantity increased!`);
    };

    const handleDecrement = () => {
        dispatch(decrementItem({ title }));
        // toast.success(`${title} quantity decreased!`);
    };

    return (
        <div className='md:shadow-stone-300 rounded-xl md:rounded-3xl bg-stone-10'>
            <div className='rounded-t-xl md:rounded-t-3xl h-24 md:h-56'>
                {!imageLoaded && <Skeleton height="100%" />}
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover ${imageLoaded ? '' : 'hidden'}`}
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <div className='py-3'>
                <div className='flex justify-between items-center lilita-one-regular'>
                    <div className='lilita-one-regular text-[16px] md:text-3xl'>{title}</div>
                    <div className='text-[16px] md:text-3xl'>{price} <span className='text-blue-500 text-[11px] md:text-sm'>{category == 'Normal-cloths' ? 'Rs/Kg' : 'Rs/Piece'}</span></div>
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
                        className={`h-10 md:h-14 aspect-square flex justify-center items-center border rounded-lg cursor-pointer transition-all duration-200 ${isIronButton ? 'bg-[royalblue] text-white border-blue-500' : 'bg-blue-100 text-stone-700 border-blue-300'
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
