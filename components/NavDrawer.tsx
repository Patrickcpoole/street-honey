import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

function NavDrawer() {
	const { toggleNavDrawer, setToggleNavDrawer } = useStateContext();
	const theme = useTheme();
	const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<>
			<Drawer
				sx={{
					width: isSmallerScreen ? "100%" : "300px", // adjust width based on screen size
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: isSmallerScreen ? "100%" : "300px", // adjust width of paper container
					},
				}}
				anchor="left"
				open={toggleNavDrawer}
				onClose={() => setToggleNavDrawer(false)}
			>
				<div className="flex justify-center">
						<Image
							src="/street-honey-transparent-website-logo.png"
							alt="Street Honey Logo"
							width={175}
							height={175}
						/>

					<div className="absolute top-0 right-0 pt-4 pr-4">
						<button
							onClick={() => setToggleNavDrawer(false)}
							className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
						>
							<AiOutlineClose size={30} />
						</button>
					</div>
				</div>
				<Divider />
				<div className="flex flex-row">
				<div className="flex flex-col md:mx-2 mx-3 my-3">
					<Link
						href={"/prints"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							Shop All Prints
						</h2>
					</Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: "new",
							},
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							New Prints
						</h2>
					</Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: "best-seller",
							},
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							Best Sellers
						</h2>
					</Link>
					{/* <Link
						href={"/merch"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							Merch
						</h2>
					</Link> */}
				</div>
				<div className="md:hidden flex flex-col  mx-3 my-3">
					<Link
						href={"/about-us"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							About Us
						</h2>
					</Link>
					<Link
						href={"/events"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							Events
						</h2>
					</Link>
					<Link
						href={"/submissions"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2
							className="print-category-main-item"
							onClick={() => setToggleNavDrawer(false)}
						>
							Submissions
						</h2>
					</Link>
				</div>
				</div>
				<Divider /> 
				<div className="flex flex-col md:mx-5 mx-3 my-3">
					<h3 style={{ fontSize: "1.55em" }}>Shop By Theme</h3>
					<ul className="flex flex-col my-2">
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "beach",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Beach
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "mountain",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Mountain
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "street",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Street
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "automotive",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Automotive
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "minimal-abstract",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Minimal/Abstract
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "portrait",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								
								Portrait
							</li>
						</Link>
					
					</ul>
				</div>
				<Divider />
				<div className="flex flex-col md:mx-5 mx-3 my-3">
			 <h3 style={{ fontSize: "1.55em" }}>Shop By Region</h3>
					<ul className="flex flex-col mt-2 mb-2">
					<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "west-coast",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								West Coast
							</li>
						</Link>
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "east-coast",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								East Coast
							</li>
						</Link>
					<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "southwest",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								South West
							</li>
						</Link>
					
				
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "southern",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								Southern
							</li>
						</Link>
						
						<Link
							href={{
								pathname: "/prints/",
								query: {
									tag: "international",
								},
							}}
							style={{
								textDecoration: "none",
								color: "#333",
								marginRight: "10px",
							}}
						>
							<li
								className="print-category-item"
								onClick={() => setToggleNavDrawer(false)}
							>
								International
							</li>
						</Link>
						
					</ul>
				</div> 
			</Drawer>
		</>
	);
}

export default NavDrawer;
