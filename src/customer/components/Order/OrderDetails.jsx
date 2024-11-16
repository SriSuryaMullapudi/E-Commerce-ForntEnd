import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div className='shadow-lg px-3'>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid container className='space-y-5'>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:'space-between'}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[7rem] h-[7rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70" alt=""/>
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Men Solid Cotton Blend Straight Kurta</p>
                            <p className=' space-x-5 opacity-50 text-sm font-semibold'><span>Color : Black</span> <span>Size : M</span></p>
                            <p className='font-semibold opacity-75'>Seller : Flipkart</p>
                            <p className='font-bold'>₹277</p>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>
                        <StarOutlineIcon sx={{fontSize:"3rem"}} className='px-2'/>
                        <span>Rate & Revire Product</span>
                    </Box>
                </Grid>
            </Grid>)}
            
        </Grid>
        
    </div>
  )
}

export default OrderDetails