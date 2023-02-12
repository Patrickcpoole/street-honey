import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping, AiOutlineInstagram} from 'react-icons/ai'


import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className="navbar-container">
      <div className='link-container'>
      <span>
        <Link href={"/"}  style={{ textDecoration: 'none', color:'#333', marginRight: '10px' }}>Shop</Link>
      </span>
      <span>
        <Link href={"/events"}  style={{ textDecoration: 'none', color:'#333', marginRight: '10px' }}>Events</Link>
      </span>
      <span>
        <Link href={"/"}  style={{ textDecoration: 'none', color:'#333', marginRight: '10px' }}>Submissions</Link>
      </span>
      <span>
        <Link href={"/about-us"}  style={{ textDecoration: 'none', color:'#333', marginRight: '10px' }}>About Us</Link>
      </span>
      </div>
      <div>
        <h5 className='navbar-title'><Link href={"/"}  style={{ textDecoration: 'none', color:'#333' }}>Street Honey</Link></h5>
      </div>
      <div className='nav-icon-container'>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineInstagram />
      </button>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
      </div>
    </div>
  )
}

export default Navbar