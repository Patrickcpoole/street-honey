import React, {useEffect, useState} from 'react'
import { ProductTyping, PhotographerTyping} from "../typings";
import { Product} from '../components';
import {client} from '../lib/client';
import { useRouter } from 'next/router'


type Props = {
	products: ProductTyping[],
  photographerData: PhotographerTyping[]
};

const Prints = ({ products}: Props) => {

  const [filteredProducts, setFilteredProducts] = useState(products)

  const router = useRouter()
  
  useEffect(() => {
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
    
  }, [router, products])

return  (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 px-2 md:px-0 my-5'>
      {filteredProducts?.map((filteredProduct) => (
      <Product 
        key={filteredProduct._id} 
        product={filteredProduct} 
        />
      
    ))}
      </div>
      </>
)
}



export const getServerSideProps = async (context:any) => {

  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  
  return {
    props: {products}
  }
}

export default Prints