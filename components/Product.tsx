import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/client";

import { urlFor } from "../lib/client";

const Product = ({
	product: { image, name, slug, price, details, photographer },
}) => {

 const [photographerData, setPhotographerData] = useState(null)

	useEffect(() => {
		async function fetchProductPhotographer() {
			
			if (photographer) {
				const query = `*[_type == "photographer" && _id == "${photographer._ref}"]`;
				const photographerResponse = await client.fetch(query);
			
				setPhotographerData(photographerResponse[0])
			}
		}



		fetchProductPhotographer();
	}, []);

	const imageSrc = urlFor(image[0]).url();


	const imageStyle = {
		width: "initial",
		maxHeight: "300px",
		maxWidth: "400px",
		boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
	};

	return (
		<div>
			<div className="product-card">
				<Link
					href={`/product/${slug.current}`}
					style={{ textDecoration: "none" }}
				>
					<Image
						src={urlFor(image && image[0]).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={400}
						height={300}
					/>
				</Link>
				<div className="product-info-container">
					<p className="product-name">{name}</p>
					<Link
						href={`/photographer/${photographerData ? photographerData.slug.current : null}`}
						style={{ textDecoration: "none" }}
					>
						<p className="product-artist">{details.split("-")[0]}</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
