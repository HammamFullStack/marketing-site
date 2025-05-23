import React from 'react'
import CategoriesSection from "../../components/Home/CategoriesSection/CategoriesSection"
import SpecialCategory from '../../components/Home/CategoriesSection/SpecialCategory'
import MonthProducts from '../../components/Home/MonthProducts/MonthProducts'
import TodayProducts from '../../components/Home/TodayProducts/TodayProducts'
import { ScrollProvider } from '../../context/ScrollContext'
import FeaturedSection from '../../components/Home/FeaturedSection/FeaturedSection'
import OurProduct from '../../components/Home/OurProducts'

function Home() {

  return (
    <ScrollProvider>
      <TodayProducts />
      <hr className='lineThrough'/>
      <CategoriesSection />
      <hr className='lineThrough'/>
      <MonthProducts />
      <SpecialCategory />
      <OurProduct />
      <FeaturedSection />
    </ScrollProvider>
  )
}

export default Home
