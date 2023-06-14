import React, { useRef } from "react";
import Drawer from "@mui/material/Drawer";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import toast from "react-hot-toast";
import getStripe from "../lib/getStripe";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const imageStyle = {
	width: "initial",
	height: "20%",
	maxWidth: "30%",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const CartDrawer = () => {
	const theme = useTheme();
	const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));
	const cartRef = useRef<HTMLDivElement | null>(null);

	const handleCheckout = async () => {
		const stripe = await getStripe();

		const response = await fetch("/api/stripe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(cartItems),
		});

		if (response.status === 500) {
			const errorData = await response.json();
			console.log("Error:", errorData);
			return;
		}

		const data = await response.json();
		console.log("STRIPE RESPONSE DATA", data);
		toast.loading("Redirecting...");

		stripe.redirectToCheckout({ sessionId: data.id });
	};

	const {
		totalPrice,
		totalQuantities,
		cartItems,
		toggleCartDrawer,
		setToggleCartDrawer,
		onRemove,
		increaseQuantity,
		decreaseQuantity,
		setShowCart,
	} = useStateContext();

	return (
		<Drawer
			sx={{
				width: isSmallerScreen ? "100%" : "500px", // adjust width based on screen size
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: isSmallerScreen ? "100%" : "500px", // adjust width of paper container
				},
			}}
			anchor="right"
			className="cart-wrapper"
			ref={cartRef}
			open={toggleCartDrawer}
			onClose={() => setToggleCartDrawer(false)}
		>
			<div className="cart-container">
				<button
					className="cart-heading"
					type="button"
					onClick={() => setToggleCartDrawer(false)}
				>
					<AiOutlineLeft />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities})</span>
				</button>
				{cartItems.length < 1 && (
					<div className="empty-cart">
						<div className="flex column justify-center w-full">
							<AiOutlineShopping size={100} />
						</div>
						<h3>Your cart is empty</h3>
						<Link href="/prints">
							<button
								type="button"
								className="btn"
								onClick={() => setToggleCartDrawer(false)}
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
												{item.details ? item.details.split("-")[0] : ""}
											</h6>
											{item.size === "One size fits all" ? (
												<div>
													<div className="flex mt-2">
														<h6>{item.size}</h6>
													</div>
													<div className="flex space-x-2 items-center mt-1">
														<h6>Quantity:</h6>
														<button
															onClick={() => decreaseQuantity(item)}
															className=" text-secondary-color  px-1 rounded hover:bg-secondary-color hover:text-primary-color transition-colors duration-200"
														>
															-
														</button>
														<h6>{item.quantity}</h6>
														<button
															onClick={() => increaseQuantity(item)}
															className=" text-secondary-color   px-1 rounded hover:bg-secondary-color hover:text-primary-color transition-colors duration-200"
														>
															+
														</button>
													</div>
												</div>
											) : (
												<div
													className="flex flex-col mt-2"
													style={{ width: "175px" }}
												>
													<div className="flex">
														<h6>{item.size}</h6> | <h6>{item.dimensions}</h6>
													</div>
													<div className="flex space-x-2 items-center mt-1">
														<h6>Quantity:</h6>
														<button
															onClick={() => decreaseQuantity(item)}
															className=" text-secondary-color  px-1 rounded hover:bg-secondary-color hover:text-primary-color transition-colors duration-200"
														>
															-
														</button>
														<h6>{item.quantity}</h6>
														<button
															onClick={() => increaseQuantity(item)}
															className=" text-secondary-color   px-1 rounded hover:bg-secondary-color hover:text-primary-color transition-colors duration-200"
														>
															+
														</button>
													</div>
												</div>
											)}
										</div>

										<h4>${item.price}</h4>
									</div>
									<div className="flex bottom flex-row-reverse">
										<button
											type="button"
											className="remove-item"
											onClick={() => onRemove(item)}
										>
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
							<h3>Subtotal</h3>
							<h3>${totalPrice}</h3>
						</div>
						<div className="w-full flex justify-center">
							<button type="button" className="btn" onClick={handleCheckout}>
								checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</Drawer>
	);
};

export default CartDrawer;
