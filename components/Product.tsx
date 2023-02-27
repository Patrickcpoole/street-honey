import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, details } }) => {
	const imageSrc = urlFor(image[0]).url();
	console.log("image src", urlFor(image[0]));

	const imageStyle = {
		width: 'initial',
		maxHeight: '300px',
  maxWidth: '400px',
   boxShadow: '0px 5px 17px rgba(0,0,0,0.3)'
	}

	return (
		<div>
			<Link
				href={`/product/${slug.current}`}
				style={{ textDecoration: "none" }}
			>
				<div className="product-card">
					{/* <img src={urlFor(image && image[0])} className="product-image" /> */}
				
						<Image
							src={urlFor(image && image[0]).url()}
							style={imageStyle}
							alt="Picture of the author"
							width={400}
							height={300}

						/>
				
					<div className="product-info-container">
						<p className="product-name">{name}</p>
						<p className="product-artist">{details.split("-")[0]}</p>
						<p className="product-price">5 sizes / {price}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Product;
