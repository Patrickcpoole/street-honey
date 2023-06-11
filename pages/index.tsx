import React, {useState, useEffect} from 'react'
import { Product, HeroBanner } from '../components'
import {client} from '../lib/client';
import { ProductTyping, BannerDataTyping, PhotographerTyping } from "../typings";
import 'bootstrap/dist/css/bootstrap.min.css';


type Props = {
	products: ProductTyping[],
  bannerData: BannerDataTyping[]
  photographerData: PhotographerTyping[]
};

const Home = ({ products, bannerData}: Props) => {

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
  
    let newFilteredProducts: ProductTyping[] = []
      console.log('these are the products in the main page', products)
      products.forEach(product => {
        product.tags.includes('new') ? newFilteredProducts.push(product) : null
        setFilteredProducts(newFilteredProducts)
      })
    }, [products])
    
  

  return (
    <>
    <HeroBanner heroBanner={bannerData}></HeroBanner>
    <div className='products-heading'>
      <h2>Fresh off the Scanner</h2>
      <p>Brand new to the Street Honey Collection</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 w-full p-2">
      {filteredProducts?.map((filteredProduct) => (
      <Product 
        key={filteredProduct._id} 
        product={filteredProduct}
  
      />
      )
      )}
      </div>

    </>
  )
  }

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home