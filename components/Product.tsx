import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, details } }) => {
	return (
		<div>
			<Link
				href={`/product/${slug.current}`}
				style={{ textDecoration: "none" }}
			>
				<div className="product-card">
					<img
						src={urlFor(image && image[0])}
						width={250}
						height={300}
						className="product-image"
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
