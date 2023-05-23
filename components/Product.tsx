import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/client";
import { PhotographerTyping, ProductTyping } from "../typings";
import { urlFor } from "../lib/client";


type Props = {
	product: ProductTyping;
	
};

const Product: React.FC<Props> = ({ product }) => {

 const [photographerData, setPhotographerData] = useState(null)

	useEffect(() => {
	
		async function fetchProductPhotographer() {
			
			if (product.photographer) {
				const query = `*[_type == "photographer" && _id == "${product.photographer._ref}"]`;
				const photographerResponse = await client.fetch(query);

				setPhotographerData(photographerResponse[0])
			}
		}

		fetchProductPhotographer();
	}, [product]);


	const imageStyle = {
		width: "initial",
		maxHeight: "300px",
		maxWidth: "400px",
		boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
	};

	const imageUrl = urlFor(product.image && product.image[0]?.asset?._ref).url();

	return (
		<div>
			<div className="product-card">
				<Link
					href={`/product/${product.slug.current}`}
					style={{ textDecoration: "none" }}
				>
					<Image
						 src={imageUrl}
						style={imageStyle}
						alt="Picture of the author"
						width={400}
						height={300}
					/>
				</Link>
				<div className="product-info-container">
					<p className="product-name">{product.name}</p>
					<Link
						href={`/photographer/${photographerData ? (photographerData as PhotographerTyping).slug.current : null}`}
						style={{ textDecoration: "none" }}
					>
						<p className="product-artist">{product.details.split("-")[0]}</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Product;
