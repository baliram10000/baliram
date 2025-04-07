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
        const updatedIronCloth = !item.ironCloth; // Reflect the toggled state
        dispatch(toggleIron(item));
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
                                    {item.title}
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
