import React from 'react'
import { ProductTyping, BannerDataTyping } from "../typings";
import { Product} from '../components';
import {client} from '../lib/client';

type Props = {
	products: ProductTyping[],
};

const Prints = ({ products}: Props) => (
    <>
    <div className='products-container'>
      {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      </>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  console.log('this is products', products)


  return {
    props: {products}
  }
}

export default Prints