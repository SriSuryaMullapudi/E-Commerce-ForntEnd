import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div className='px-4'>
        <Grid containder spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56, height:56, bgcolor:'#9155fd'}}>
                        R
                    </Avatar>
                </Box>

            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold'>Lucky</p>
                        <p className='opacity-50'>January 5, 2023</p>
                    </div>
                </div>
                <Rating value={4} name = 'half-rating' readOnly/>
                <p>Nice product, it is well made and the quality is good.</p>

            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard