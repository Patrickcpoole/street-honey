import Link from "next/link";
import {
	AiOutlineInstagram,
	AiOutlineShopping,
	AiOutlineReddit,
	AiOutlineYoutube,
	AiOutlineMenu
} from "react-icons/ai";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { motion } from "framer-motion";

const Navbar = () => {
	const { showCart, setToggleCartDrawer, totalQuantities, setToggleNavDrawer } =
		useStateContext();

	return (
		<nav className=" h-20 z-50 bg-offWhite w-full flex-nowrap fixed top-0 left-0 right-0">
			<div className="mx-4 flex flex-row justify-between items-center h-20">
			<motion.div className="block md:hidden cursor-pointer" onClick={() => setToggleNavDrawer(true)}>
        
          <AiOutlineMenu className="h-6 w-6" />
        
      </motion.div>
			<motion.div
				className="hidden w-full flex-grow md:flex md:items-center md:w-auto"
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
			>
				<span
					className="nav-item"
					onClick={() => setToggleNavDrawer(true)}
					style={{
						textDecoration: "none",
						color: "#333",
						marginRight: "10px",
						cursor: "pointer",
					}}
				>
					Shop
				</span>
				<span>
					<Link className="nav-item" href={"/events"}>
						Events
					</Link>
				</span>
				{/* <span>
					<Link className="nav-item" href={"/submissions"} style={{}}>
						Submissions
					</Link>
				</span> */}
				<span>
					<Link
						className="nav-item"
						href={"/about-us"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						Team
					</Link>
				</span>
				{/* <span>
					<Link
						className="nav-item"
						href={"/merch"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						Merch
					</Link>
				</span> */}
			</motion.div>
			<motion.div
				animate={{ x: 0 }}
				transition={{ type: "spring", stiffness: 100 }}
			>
				<h5 className="navbar-title">
					<Link href={"/"} style={{ textDecoration: "none", color: "#333" }}>
						<Image
							src="/street-honey-transparent-website-logo.png"
							alt="Street Honey Logo"
							width={150}
							height={150}
						/>
					</Link>
				</h5>
			</motion.div>
			<motion.div
				className="flex flex-row justify-between items-center mr-1 w-24"
				initial={{
					x: 200,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
			>
				<a
					className="cart-icon"
					target="_blank"
					href="https://www.instagram.com/streethoney/?hl=en"
					rel="noopener noreferrer"
				>
					<AiOutlineInstagram style={{ color: "#333" }} />
				</a>

				{/* <a
					className="cart-icon"
					target="_blank"
					href="https://www.reddit.com/r/StreetHoney/"
					rel="noopener noreferrer"
				>
					<AiOutlineReddit style={{ color: "#333" }} />
				</a> */}
				<a
					className="cart-icon"
					target="_blank"
					href="https://www.youtube.com/@streethoneyfilm"
					rel="noopener noreferrer"
				>
					<AiOutlineYoutube style={{ color: "#333" }} />
				</a>
				<button
					type="button"
					className="cart-icon"
					onClick={() => setToggleCartDrawer(true)}
				>
					<AiOutlineShopping style={{ color: "#333" }} />
					<span className="cart-item-qty">{totalQuantities}</span>
				</button>
	
			</motion.div>
			</div>
		</nav>
	);
};

export default Navbar;
