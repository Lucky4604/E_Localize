import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import Header from '../../components/header/Header'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'



const Home = () => {
  
  return (
    <div className='bg-gradient-to-r from-violet-300 to-indigo-600'>

    <Layout>
        <Header/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
    </Layout>
    </div>
  )
}

export default Home