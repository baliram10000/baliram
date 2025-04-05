import React from 'react';
import { TbIroning3Filled } from "react-icons/tb";

function CartCard({ title, image, price, quantity, ironCloth, isIron, onIncrement, onDecrement, onToggleIron, category }) {
    console.log("category: ", category);
    return (
        <div className='flex items-center gap-4 py-4 border-b border-stone-300'>
            {/* Product Image */}
            <div className='w-24 h-24 rounded-lg overflow-hidden'>
                <img src={image} alt={title} className='w-full h-full object-cover' />
            </div>

            {/* Product Details */}
            <div className='flex-1'>
                <div className='text-lg font-semibold'>{title}</div>
                <div className='text-sm text-stone-600'>Price: {price} {category=='Normal-cloths' ? 'Rs/Kg' : 'Rs/Piece'} </div>
                {ironCloth && <div className='text-sm text-blue-500'>Ironing Selected</div>}
                {/* Ironing Option */}
                {isIron && (
                    <div
                        onClick={onToggleIron}
                        className={`h-7 aspect-square mt-2 flex justify-center items-center border rounded-lg cursor-pointer transition-all duration-200 ${
                            ironCloth ? 'bg-blue-500 text-white border-blue-500' : 'bg-blue-100 text-stone-700 border-blue-300'
                        }`}
                    >
                        <TbIroning3Filled className='text-lg' />
                    </div>
                )}
            </div>

            {/* Quantity Controls */}
            <div className='flex flex-col items-center gap-1'>
                <button
                    onClick={onDecrement}
                    className='bg-red-500 text-white w-7 aspect-square flex justify-center items-center hover:scale-110 rounded-lg transition-all duration-200'
                >
                    -
                </button>
                <div className='font-medium'>{quantity}</div>
                <button
                    onClick={onIncrement}
                    className='bg-green-500 text-white w-7 aspect-square flex justify-center items-center hover:scale-110 rounded-lg transition-all duration-200'
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default CartCard;