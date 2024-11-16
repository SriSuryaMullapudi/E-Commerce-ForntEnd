import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate= useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70" alt=""/>
                    <div className='ml-5 space-y-2'>
                        <p className='opacity-90 text-xs font-bold'>Men Solid Cotton Blend Straight Kurta</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>

            </Grid>

            <Grid item xs={2}>
                <p>₹277</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"17px", height:"17px"}} className='text-green-600 mr-2 text-sm'/>
                    <span> 
                        Delivered on October 23
                    </span>
                </p>
                <p className='text-xs text-green-600'>
                    Your item has been delivered
                </p>
                    </div>}
                {false && <p>
                    <span>
                        Expected Delivered on October 23
                    </span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard