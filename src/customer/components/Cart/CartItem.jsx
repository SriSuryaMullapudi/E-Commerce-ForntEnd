import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/r/m/xxs-sada-plain-kurta-ksh-trendz-original-imag4baggdt7txju-bb.jpeg?q=70" alt=''/>
            </div>
            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Men Solid Cotton Blend Straight Kurta</p>
                <p className='opacity-70'>Size: L, White</p>
                <p className='opacity-70 mt-2'>Sellter: KSH Trendz</p>

                <div className='flex space-x-5 items-center lg:text-x1 text-gray-900 pt-6'>
                        <p className='font-semibold'>
                            ₹499
                        </p>
                        <p className='opacity-50 line-through text-red-800'>
                            ₹1499
                        </p>
                        <p className='text-green-600 font-semibold'>
                            66% off
                        </p>
                    </div>
            </div>
            
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color: "RGB(218 0 0)"}}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color: "RGB(145 85 253)"}}>
                        <AddCircleIcon/>
                    </IconButton>
                    
                </div>
                <div>
                    <Button sx={{color: "RGB(145 85 253)"}}>Remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem