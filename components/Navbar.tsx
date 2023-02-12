import Link from "next/link";
import { AiOutlineInstagram, AiOutlineShopping } from "react-icons/ai";
import Image from 'next/image'
import { useStateContext } from "../context/StateContext";
import { Cart } from "./";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities, setToggleDrawer } =
		useStateContext();

	return (
		<div className="navbar-container">
			<div className="link-container">
				<span
					onClick={() => setToggleDrawer(true)}
					style={{ textDecoration: "none", color: "#333", marginRight: "10px" }}
				>
					Shop
				</span>
				<span>
					<Link
						href={"/events"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						Events
					</Link>
				</span>
				<span>
					<Link
						href={"/"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						Submissions
					</Link>
				</span>
				<span>
					<Link
						href={"/about-us"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						About Us
					</Link>
				</span>
			</div>
			<div>
				<h5 className="navbar-title">
					<Link href={"/"} style={{ textDecoration: "none", color: "#333" }}>
						<Image
							src="/../public/logo.jpg"
							alt="Picture of the author"
							width={150}
							height={150}
						/>
					</Link>
				</h5>
			</div>
			<div className="nav-icon-container">
				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart(true)}
				>
					<AiOutlineInstagram />
				</button>
				<button
					type="button"
					className="cart-icon"
					onClick={() => setShowCart(true)}
				>
					<AiOutlineShopping />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>
				{showCart && <Cart />}
			</div>
		</div>
	);
};

export default Navbar;
