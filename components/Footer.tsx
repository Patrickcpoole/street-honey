import React from 'react'
import { AiFillInstagram, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p className='my-2'>2023 Street Honey All Rights Reserved</p>
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
					href="https://www.youtube.com/@streethoneyfilm"
					rel="noopener noreferrer"
				>
					<AiFillYoutube style={{ color: "#333" }} />
				</a>
      </p>
    </div>
  )
}

export default Footer