import React from 'react'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../productCard/ProductCard'
import Filter from '../../components/filter/Filter'

const AllProduct = () => {
  return (
    
    <Layout>
    <Filter/>
    <ProductCard showAll={true} /> 
    </Layout>
   
  )
}

export default AllProduct