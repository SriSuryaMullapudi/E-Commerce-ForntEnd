import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import Cart from '../Cart/Cart'
import CartItem from '../Cart/CartItem'

const OrderSummery = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-sm border'>
        <AddressCard/>
      </div>
      <div className='p-5 shadow-lg rounded-s-sm border'>
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
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                    >
                        Check Out
                    </button>
            </div>

        </div>
        </div>
        
        
    </div>
      </div>
    </div>
  )
}

export default OrderSummery