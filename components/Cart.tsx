import React, { useRef } from "react";
import Link from "next/link";
import { ContextTyping } from "../typings";
import Image from "next/image";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiOutlineLeft,
	AiOutlineShopping,
} from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import toast from "react-hot-toast";
import getStripe from '../lib/getStripe'
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const imageStyle = {
	width: "initial",
	maxHeight: "150px",
	maxWidth: "300px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const Cart = () => {
	const cartRef = useRef<HTMLDivElement | null>(null);

	const handleCheckout = async () => {
		const stripe = await getStripe();

		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(cartItems)
		});

		if (response.status === 500) {
			const errorData = await response.json();
			console.log('Error:', errorData);
			return;
		}

		const data = await response.json()
		console.log('STRIPE RESPONSE DATA', data)
		toast.loading('Redirecting...')

		stripe.redirectToCheckout({sessionId: data.id})
	}

	const {
		totalPrice,
		totalQuantities,
		cartItems,
		onRemove,
		setShowCart,
	} = useStateContext();

	return (
		<div className="cart-wrapper" ref={cartRef}>
			<div className="cart-container">
				<button
					className="cart-heading"
					type="button"
					onClick={() => setShowCart(false)}
				>
					<AiOutlineLeft />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities})</span>
				</button>
				{cartItems.length < 1 && (
					<div className="empty-cart">
						<AiOutlineShopping size={150} />
						<h3>Your cart is empty</h3>
						<Link href="/">
							<button
								type="button"
								className="btn"
								onClick={() => setShowCart(false)}
							>
								Continue Shopping
							</button>
						</Link>
					</div>
				)}

				<div className="product-container">
					{cartItems.length >= 1 &&
						cartItems.map((item, index) => (
							<div className="product" key={index}>
								{/* <img
									src={urlFor(item?.image[0])}
									className="cart-product-image"
									alt=""
								/> */}
								<Image
									src={urlFor(item.image[0].asset._ref).url()} 
									style={imageStyle}
									alt="Picture of the author"
									width={1000}
									height={800}
								/>
								<div className="item-desc ml-5">
									<div className="flex top">
										<div>
											<h5>{item.name}</h5>
											<h6 className="italic underline underline-offset-4 text-sm">
												{item.details.split("-")[0]}
											</h6>
											<div className="flex mt-2" style={{ width:'175px'}}>
												<h6>{item.size}</h6> | <h6>{item.dimensions}</h6>
											</div>
										</div>
										<h4>${item.price}</h4>
									</div>
									<div className="flex bottom flex-row-reverse">
										<button type="button" className="remove-item" onClick={() => onRemove(item)}>
											<TiDelete />
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subototal</h3>
							<h3>${totalPrice.toFixed(2)}</h3>
						</div>
						<div className="btn-container">
							<button type="button" className="btn" onClick={handleCheckout}>
								checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
