import React from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';

const Job = () => {
   const {cartArray}=useLoaderData();
   console.log(cartArray)

    const cart=getStoredCart();
   // console.log(cart)
    return (
        <div>
            <div className=' flex justify-center'>
            <button className="btn btn-accent">Filter</button>
            </div>
             
             <div className='flex items-start justify-center min-h-screen text-gray-900'>
                <div className='flex flex-col p-6 space-y-4 sm:p-10'>
                    {/* <h2 className='font-semibold text-xl'>{cartArray.length}</h2> */}

                    <ul className='flex flex-col space-y-6'>
                        {
                            cartArray.map(product => (
                                // <CartItem
                                //     key={product.id}
                                //     product={product}
                                // ></CartItem>
                                <CartItem key={product.id}
                                product={product}></CartItem>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Job;