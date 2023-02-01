import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner: {discount, largeText1, largeText2, saleTime, desc, smallText, midText, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <p>{saleTime}</p>
          <h3>{largeText1}</h3>
          
        
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
      
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        
        </div>
    </div>
  )
}

export default FooterBanner