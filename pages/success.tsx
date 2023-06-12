import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { BsBagCheckFill} from 'react-icons/bs'
import { runFireworks } from '../lib/utils'
import {useStateContext} from '../context/StateContext'

const Success = () => {
  const {setCartItems, setTotalPrice} = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    runFireworks();
  }, [])

  return (
    <div className='w-full flex flex-col items-center '>
     
        <p className="icon mt-5">
          <BsBagCheckFill size={'10em'} color={'#333'}/>
        </p>
        <h2 className='text-4xl my-10'>Thank you for your order!</h2>
        <p className="email-msg text-center">Check your email inbox for the receipt.</p>
        <p className="description text-center">
          If you have any questions, please email <br/>
          <a className='email' href="mailto:streethoneyphoto@gmail.com">streethoneyphoto@gmail.com</a>
        </p>
        <Link href="/" className='mb-10'>
          <button type="button" className='btn'>Home</button>
        </Link>
  
    
    </div>
  )
}

export default Success