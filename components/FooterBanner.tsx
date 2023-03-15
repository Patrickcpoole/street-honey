import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterBanner = () => {
	return (
		<div className="footer-banner-container">
			<div className="footer-banner-content-container">
				<Link href={"/"} style={{ textDecoration: "none", color: "#333" }}>
					<Image
						src="/../public/Street-Honey-Logo-White.png"
						alt="Street Honey Logo"
						width={350}
						height={350}
					/>
				</Link>
			</div>
			<div className="footer-banner-content-container" >
				<h3 style={{ fontSize: "1.55em", marginTop: "10%", marginBottom: '5%'}}>Shop By Theme</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
					<li className="footer-content-item">Beach</li>
					<li className="footer-content-item">Mountains</li>
					<li className="footer-content-item">Street</li>
					<li className="footer-content-item">Automotive</li>
					<li className="footer-content-item"> Minimal/Abstract</li>
					<li className="footer-content-item">Portraits</li>
				</div>
			</div>
			<div className="footer-banner-content-container" style={{background: 'green'}}>
				<h3 style={{ fontSize: "1.55em", marginTop: "10%", marginBottom: '5%'  }}>Shop By Region</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
					<span className="footer-content-item">Bay Area</span>
					<span className="footer-content-item">Mid West</span>
					<span className="footer-content-item">South West</span>
					<span className="footer-content-item">East Coast</span>
					<li className="footer-content-item">Southern CA</li>
					<li className="footer-content-item">Europe</li>
					<li className="footer-content-item">Asia</li>
					</div> 
			</div>
			<div className="footer-banner-content-container">
				<h3 style={{ fontSize: "1.55em", marginTop: "10%", marginBottom: '5%'}}>Company</h3>
				<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
					<li className="footer-content-item">About Us</li>
					<li className="footer-content-item">Submissions</li>
          <li className="footer-content-item">Events</li>
          <li className="footer-content-item">Terms of Service</li>
          <li className="footer-content-item">privacy Policy</li>
				</div>
			</div>
			<div className="footer-banner-content-container">
      <h3 style={{ fontSize: "1.55em", marginTop: "10%", marginBottom: '5%', textAlign: 'center' }}>Contact Us</h3>
			<div style={{listStyleType: 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
					<li className="footer-content-item">Email: streethoney@gmail.com</li>
					<li className="footer-content-item">Phone: 303-888-8909</li>
          
				</div>
			</div>
		</div>
	);
};

export default FooterBanner;
