import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousal from '../../components/HomeSectionCarsousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurtha'

const HomePage = () => {
    return (
        <div>
            <MainCarousel/>

            <div className='space-y-10 py-10 px-5 lg:px-10'>
                <HomeSectionCarousal data={mens_kurta} sectionName={"Men's Kurtha"}/>
                <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarousal data={mens_kurta} sectionName={"Women's Dress"}/>
            </div>
        </div>
    )
}

export default HomePage