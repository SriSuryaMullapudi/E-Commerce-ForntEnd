import React from 'react'
import CartItem from './CartItem'
import { Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()

    const handleCheckOut = () => {
        navigate("/checkout?step=2")
    }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative lg:mt-10'>
            <div className='col-span-2'>
                {[1].map((item)=><CartItem/>)}
            </div>
            <div className='px-5 sticky top-0 h=[100vh] mt-5 lg:mt-0'>
            <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                <hr/>
                <div className='space-y-3 font-semibold'>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>₹1,497</span>
                    </div>
                    <div className='flex justify-between pt-3 '>
                        <span>Discount</span>
                        <span className='text-green-500'>₹4,497</span>
                    </div>
                    <div className='flex justify-between pt-3 text-black'>
                        <span>Delivery Charge</span>
                        <span>Free</span>
                    </div>
                    <div className='flex justify-between pt-3 font-bold'>
                        <span>Total</span>
                        <span className='text-green-500'>₹1,497</span>
                    </div>
                </div>
                <button onClick={handleCheckOut} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        Check Out
                    </button>
            </div>

        </div>
        </div>
        
        
    </div>
  )
}

export default Cart