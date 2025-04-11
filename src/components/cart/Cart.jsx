import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartCard from './CartCard';
import { incrementItem, decrementItem, toggleIron } from '../../Redux/orderslice';
import toast from 'react-hot-toast';

function Cart() {
    const items = useSelector(state => state.order.items);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(incrementItem(item));
        // No toast notification for increment
    };

    const handleDecrement = (item) => {
        dispatch(decrementItem(item));
        // No toast notification for decrement
    };

    const handleToggleIron = (item) => {
        const updatedIronCloth = !item.ironCloth;
        dispatch(toggleIron(item));
        if (updatedIronCloth) {
            // Use toast.success for a consistent look with the "added to cart" notification
            toast.success(`Ironing added to ${item.title}! ₹5 per piece.`);
        }
    };

    return (
        <div className='w-full'>
            {items.length === 0 ? (
                <div className='text-center text-stone-600'>Your cart is currently empty.</div>
            ) : (
                items.map((item, index) => (
                    <CartCard
                        key={index}
                        {...item}
                        onIncrement={() => handleIncrement(item)}
                        onDecrement={() => handleDecrement(item)}
                        onToggleIron={() => handleToggleIron(item)}
                    />
                ))
            )}
        </div>
    );
}

export default Cart;
