import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'
import {client} from '../lib/client';
import { ProductTyping, BannerDataTyping } from "../typings";

type Props = {
	products: ProductTyping[],
  bannerData: BannerDataTyping[]
};

const Home = ({ products, bannerData}: Props) => (
  
    <>
    <HeroBanner heroBanner={bannerData[0]}></HeroBanner>
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}></FooterBanner>
    </>
  )

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  console.log('this is products', products)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}

export default Home