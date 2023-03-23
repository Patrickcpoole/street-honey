import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = () => {
	return (
		<div className="footer-banner-container">
			<div className="footer-banner-content-container">
				<Link href={"/"} style={{ textDecoration: "none", color: "#333" }}>
					<Image
						src="/../public/street-honey-transparent-website-logo.png"
						alt="Street Honey Logo"
						width={250}
						height={250}
					/>
				</Link>
			</div>
			<div className="footer-banner-content-container" >
				<h3 style={{ fontSize: "1.25em", marginTop: "5%", marginBottom: '2.5%'}}>Shop By Theme</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
				<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'beach'
							}
						}}><li className="footer-content-item">Beach</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'mountains'
							}
						}}><li className="footer-content-item">Mountains</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'street'
							}
						}}><li className="footer-content-item">Street</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'automotive'
							}
						}}><li className="footer-content-item">Automotive</li></Link>
						<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'minimal-abstract'
							}
						}}><li className="footer-content-item"> Minimal/Abstract</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'portraits'
							}
						}}><li className="footer-content-item">Portraits</li></Link>
				</div>
			</div>
			<div className="footer-banner-content-container">
				<h3 style={{ fontSize: "1.25em",marginTop: "5%", marginBottom: '2.5%'  }}>Shop By Region</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
				<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'bay-area'
							}
						}}><span className="footer-content-item">Bay Area</span></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'mid-west'
							}
						}}><span className="footer-content-item">Mid West</span></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'south-west'
							}
						}}><span className="footer-content-item">South West</span></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'east-coast'
							}
						}}><span className="footer-content-item">East Coast</span></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'southern-ca'
							}
						}}><li className="footer-content-item">Southern CA</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'europe'
							}
						}}><li className="footer-content-item">Europe</li></Link>
					<Link
						href={{
							pathname: "/prints/",
							query: {
								tag: 'asia'
							}
						}}><li className="footer-content-item">Asia</li></Link>
					</div> 
			</div>
			<div className="footer-banner-content-container">
				<h3 style={{ fontSize: "1.25em", marginTop: "5%", marginBottom: '2.5%'}}>Company</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
				<Link
						href={"/about-us/"}><li className="footer-content-item">About Us</li></Link>
					<Link
						href={"/submissions/"}><li className="footer-content-item">Submissions</li></Link>
         <Link
						href={"/events/"}><li className="footer-content-item">Events</li></Link> 
          <li className="footer-content-item">Terms of Service</li>
          <li className="footer-content-item">privacy Policy</li>
				</div>
			</div>
			<div className="footer-banner-content-container">
      <h3 style={{ fontSize: "1.25em",marginTop: "5%",  textAlign: 'center' }}>Contact Us</h3>
			<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
					<li className="footer-content-item">Email: streethoney@gmail.com</li>
					<li className="footer-content-item">Phone: 303-888-8909</li>
          
				</div>
			</div>
		</div>
	);
};

export default FooterBanner;
