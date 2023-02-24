import React from 'react'
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter, AiOutlineReddit} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Street Honey All Rights Reserved</p>
      <p className="icons">
      <a
					className="cart-icon"
					target="_blank"
					href="https://www.instagram.com/streethoney/?hl=en"
					rel="noopener noreferrer"
				>
					<AiFillInstagram style={{ color: '#333' }}/>
				</a>
        <a
					className="cart-icon"
					target="_blank"
					href="https://www.reddit.com/r/StreetHoney/"
					rel="noopener noreferrer"
				>
					<AiOutlineReddit style={{ color: '#333' }}/>
				</a>

        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer