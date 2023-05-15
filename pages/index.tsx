import React, {useState, useEffect} from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import {client} from '../lib/client';
import { ProductTyping, BannerDataTyping } from "../typings";
import 'bootstrap/dist/css/bootstrap.min.css';
import photographer from '../sanity-street-honey/schemas/photographer';

type Props = {
	products: ProductTyping[],
  bannerData: BannerDataTyping[]
};

const Home = ({ products, bannerData}: Props) => {

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
  
    let newFilteredProducts: ProductTyping[] = []
   
      products.forEach(product => {
        console.log('this is the product!', product)
        product.tags.includes('best-seller') ? newFilteredProducts.push(product) : null
        setFilteredProducts(newFilteredProducts)
      })
    }, [])
    
  

  return (
    <>
    <HeroBanner heroBanner={bannerData}></HeroBanner>
    <div className='products-heading'>
      <h2>Best Selling Prints</h2>
      <p>Available in different sizes</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 w-full p-2">
      {filteredProducts?.map((filteredProduct) => (
      <Product 
        key={filteredProduct._id} 
        product={filteredProduct}
        photographerData={filteredProduct.photographer}
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
  console.log('this is products', products)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log('banner Data', bannerData)

  return {
    props: {products, bannerData}
  }
}

export default Home