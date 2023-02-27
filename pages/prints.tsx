import React, {useEffect, useState} from 'react'
import { ProductTyping, BannerDataTyping } from "../typings";
import { Product} from '../components';
import {client} from '../lib/client';
import { useRouter } from 'next/router'


type Props = {
	products: ProductTyping[],
};

const Prints = ({ products}: Props) => {

  const [filteredProducts, setFilteredProducts] = useState(products)

  const router = useRouter()
  
  useEffect(() => {
    console.log('this is router in prints', router)
    const tag = router.query.tag
    let newFilteredProducts: ProductTyping[] = []
    if(Object.keys(router.query).length !== 0) {
      products.forEach(product => {
    
        product.tags.includes(tag) ? newFilteredProducts.push(product) : null
        setFilteredProducts(newFilteredProducts)
      })
    } else {
      setFilteredProducts(products)
    }
    
  }, [router.query.tag])

return  (
    <>
    <div className='products-container'>
      {filteredProducts?.map((filteredProduct) => <Product key={filteredProduct._id} product={filteredProduct}/>)}
      </div>
      </>
)
}



export const getServerSideProps = async (context:any) => {
  console.log('context', context.params)
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  console.log('this is products', products)
  return {
    props: {products}
  }
}

export default Prints