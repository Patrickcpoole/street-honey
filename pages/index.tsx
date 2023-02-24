import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import {client} from '../lib/client';
import { ProductTyping, BannerDataTyping } from "../typings";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
	products: ProductTyping[],
  bannerData: BannerDataTyping[]
};

const Home = ({ products, bannerData}: Props) => (
  
    <>
    <HeroBanner heroBanner={bannerData}></HeroBanner>
    <div className='products-heading'>
      <h2>Best Selling Prints</h2>
      <p>Available in different sizes</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      
    </>
  )

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