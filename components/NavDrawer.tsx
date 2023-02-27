import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import { useRouter } from 'next/router'
import Image from "next/image";
import { red } from "@mui/material/colors";

function NavDrawer() {
	const { toggleDrawer, setToggleDrawer } = useStateContext();

// const router = useRouter()

// const handleDrawerClick = (tag: string) => {
// 	if(!router.route.includes('/prints')) {
// 		router.push(`/prints/${tag}`)
// 	} else {
// 		router.push(`/prints/${tag}`, undefined, { shallow: true })
// 	}
// }

	return (
		<>
			<Drawer
				anchor="left"
				open={toggleDrawer}
				onClose={() => setToggleDrawer(false)}
			>
				<div className="flex justify-center">
					<Image
						src="/../public/street-honey-transparent-website-logo.png"
						alt="Street Honey Logo"
						width={250}
						height={250}
					/>
				</div>
				<Divider />
				<div className="flex flex-col mx-5 my-3">
					<Link
						href={"/prints"}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<h2 className="print-category-main-item" onClick={() => setToggleDrawer(false)}>Shop All Prints</h2>
					</Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'new'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
					<h2 className="print-category-main-item" onClick={() => setToggleDrawer(false)}>New Prints</h2>
					</Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'best-seller'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
					<h2 className="print-category-main-item" onClick={() => setToggleDrawer(false)}>Best Sellers</h2>
					</Link>
				</div>
				<Divider />
				<div className="flex flex-col mx-5 mt-3">
					<h3 style={{ fontSize: "1.55em" }}>Shop By Theme</h3>
					<ul className="flex flex-col">
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'beach'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Beach</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'mountains'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Mountains</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'street'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Street</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'automotive'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Automotive</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'minimal-abstract'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}> Minimal/Abstract</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'portraits'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Portraits</li>
						</Link>
					</ul>
				</div>
				<Divider />
				<div className="flex flex-col mx-5 mt-3">
					<h3 style={{ fontSize: "1.55em" }}>Shop By Region</h3>
					<ul>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'bay-area'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Bay Area</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'mid-west'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Mid West</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'south-west'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>South West</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'east-coast'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>East Coast</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'southern-ca'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Southern CA</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'europe'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Europe</li>
						</Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'asia'
							}
						}}
						style={{
							textDecoration: "none",
							color: "#333",
							marginRight: "10px",
						}}
					>
						<li className="print-category-item" onClick={() => setToggleDrawer(false)}>Asia</li>
						</Link>
					</ul>
				</div>
			</Drawer>
		</>
	);
}

export default NavDrawer;
