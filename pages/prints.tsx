import React, {useEffect, useState} from 'react'
import { ProductTyping, PhotographerTyping} from "../typings";
import {
	AiOutlineArrowLeft,
  AiOutlineArrowRight
	
} from "react-icons/ai";
import { Product} from '../components';
import {client} from '../lib/client';
import { useRouter } from 'next/router'


type Props = {
	products: ProductTyping[],
  photographerData: PhotographerTyping[]
};

const Prints = ({ products}: Props) => {

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Set the number of items to display per page

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

return  (
    <>
    <div className='w-full flex flex-col justify-center'>
    <h3 className='text-5xl text-secondary-color my-12 mx-auto'>Prints</h3>
    {/* <div className='flex justify-center mt-4 w-screen mb-12'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className='mx-6 px-4 flex justify-center items-center bg-secondary-color text-primary-color rounded-md'
        >
          <AiOutlineArrowLeft className='mr-2' />
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredProducts.length / itemsPerPage)))}
          disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
          className='mx-6 px-4 py-2 flex justify-center items-center  bg-secondary-color text-primary-color rounded-md'
        >
         
          Next
          <AiOutlineArrowRight className='ml-2' />
        </button>
      </div> */}
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 px-2 md:px-0 '>
      
      {currentItems?.map((filteredProduct) => (
      <Product 
        key={filteredProduct._id} 
        product={filteredProduct} 
        />
      
    ))}
  <div className='flex justify-center mt-12 w-screen mb-12 h-10 bg-primary-color'>
      {currentPage !== 1 &&
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            scrollToTop();
          }}
          disabled={currentPage === 1}
          className='mx-6 px-4 flex justify-center items-center bg-secondary-color text-primary-color rounded-md'
        >
          <AiOutlineArrowLeft className='mr-2' />
          Previous
        </button>}
        {currentPage !== Math.ceil(filteredProducts.length / itemsPerPage) &&
        <button
        onClick={() => {
          setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredProducts.length / itemsPerPage)));
          scrollToTop();
        }}
          disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
          className='mx-6 px-4 py-2 flex justify-center items-center  bg-secondary-color text-primary-color rounded-md'
        >
         
          Next
          <AiOutlineArrowRight className='ml-2' />
        </button>}
      </div>
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