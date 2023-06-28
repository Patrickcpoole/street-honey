import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = () => {
	return (
		<div className="footer-banner-container border-top border-bottom border-gray-300 bg-gray-50 text-gray-700 flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-start py-4 px-4 sm:px-6 lg:px-8">
			{/* <div className="w-full md:w-1/5 h-full pb-1 flex flex-col bg-FAF9F6 justify-start items-center">
				<h3 className="sm:mt-0 md:mt-3 mb-2 text-2xl">
					Shop By Theme
				</h3>
				<div
					style={{
						listStyleType: "none",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "beach",
							},
						}}
					>
						<li className="footer-content-item">Beach</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "mountains",
							},
						}}
					>
						<li className="footer-content-item">Mountains</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "street",
							},
						}}
					>
						<li className="footer-content-item">Street</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "automotive",
							},
						}}
					>
						<li className="footer-content-item">Automotive</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "minimal-abstract",
							},
						}}
					>
						<li className="footer-content-item"> Minimal/Abstract</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "portraits",
							},
						}}
					>
						<li className="footer-content-item">Portraits</li>
					</Link>
				</div>
			</div> */}
			{/* <div className="w-full md:w-1/5 h-full pb-1 flex flex-col bg-FAF9F6 justify-start items-center">
			<h3 className="mt-3 mb-2 text-2xl">Shop By Region</h3>
				<div className="list-none text-center flex flex-col justify-start items-center">
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "bay-area",
							},
						}}
					>
						<span className="footer-content-item">Bay Area</span>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "mid-west",
							},
						}}
					>
						<span className="footer-content-item">Mid West</span>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "south-west",
							},
						}}
					>
						<span className="footer-content-item">South West</span>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "east-coast",
							},
						}}
					>
						<span className="footer-content-item">East Coast</span>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "southern-ca",
							},
						}}
					>
						<li className="footer-content-item">Southern CA</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "europe",
							},
						}}
					>
						<li className="footer-content-item">Europe</li>
					</Link>
					<Link
					style={{ textDecoration: "none" }}
						href={{
							pathname: "/prints/",
							query: {
								tag: "asia",
							},
						}}
					>
						<li className="footer-content-item">Asia</li>
					</Link>
				</div>
			</div> */}
			<div className="w-full md:w-1/5 h-full pb-1 flex flex-col bg-FAF9F6 justify-start items-center">
				<h3 className="mt-3 mb-2 text-2xl">Company</h3>
				<div
					style={{
						listStyleType: "none",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<Link style={{ textDecoration: "none" }} href={"/about-us/"}>
						<li className="footer-content-item">About Us</li>
					</Link>
					{/* <Link style={{ textDecoration: "none" }} href={"/submissions/"}>
						<li className="footer-content-item">Submissions</li>
					</Link> */}
					<Link style={{ textDecoration: "none" }} href={"/events/"}>
						<li className="footer-content-item">Events</li>
					</Link>
					<li className="footer-content-item">Terms of Service</li>
					<li className="footer-content-item">privacy Policy</li>
				</div>
			</div>

			<Link href={"/"}>
				<Image
					src="/street-honey-transparent-website-logo.png"
					alt="Street Honey Logo"
					width={200}
					height={200}
				/>
			</Link>

			<div className="w-full md:w-1/5 h-full pb-1 flex flex-col bg-FAF9F6 justify-center items-center">
				<h3 className="mt-3 mb-2 text-2xl">Contact Us</h3>
				<div
					style={{
						listStyleType: "none",
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "center",
					}}
				>
					<li>
						<a href="mailto:streethoneyphoto@gmail.com" className="footer-content-item">
							streethoneyphoto@gmail.com
						</a>
					</li>
				</div>
			</div>
		</div>
	);
};

export default FooterBanner;
