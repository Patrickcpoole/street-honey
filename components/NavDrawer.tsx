import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import { red } from "@mui/material/colors";

function NavDrawer() {
	const { toggleDrawer, setToggleDrawer } = useStateContext();

	return (
		<>
			<Drawer
				anchor="left"
				open={toggleDrawer}
				onClose={() => setToggleDrawer(false)}
			>
				<div className="flex justify-center">
					<Image
						src="/../public/logo.jpg"
						alt="Picture of the author"
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
						<h2 className="print-category-main-item">Shop All Prints</h2>
					</Link>
					<h2 className="print-category-main-item">New Prints</h2>
					<h2 className="print-category-main-item">Best Sellers</h2>
				</div>
				<Divider />
				<div className="flex flex-col mx-5 mt-3">
					<h3 style={{ fontSize: "1.55em" }}>Shop By Theme</h3>
					<ul className="flex flex-col">
						<li className="print-category-item">Beach</li>
						<li className="print-category-item">Mountains</li>
						<li className="print-category-item">Street</li>
						<li className="print-category-item">Automotive</li>
						<li className="print-category-item"> Minimal/Abstract</li>
						<li className="print-category-item">Portraits</li>
					</ul>
				</div>
				<Divider />
				<div className="flex flex-col mx-5 mt-3">
					<h3 style={{ fontSize: "1.55em" }}>Shop By Region</h3>
					<ul>
						<li className="print-category-item">Bay Area</li>
						<li className="print-category-item">Mid West</li>
						<li className="print-category-item">South West</li>
						<li className="print-category-item">East Coast</li>
						<li className="print-category-item">Southern CA</li>
						<li className="print-category-item">Europe</li>
						<li className="print-category-item">Asia</li>
					</ul>
				</div>
			</Drawer>
		</>
	);
}

export default NavDrawer;
