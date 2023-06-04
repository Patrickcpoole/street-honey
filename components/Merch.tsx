import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/client";
import { PhotographerTyping, MerchTyping, ProductTyping } from "../typings";
import { urlFor } from "../lib/client";


type Props = {
	merch: MerchTyping;
	
};

const Merch: React.FC<Props> = ({ merch }) => {


	const imageStyle = {
		width: "initial",
		maxHeight: "300px",
		maxWidth: "400px",
		boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
	};

	const imageUrl = urlFor(merch.image && merch.image[0]?.asset?._ref).url();

	return (
		<div>
			<div className="product-card">
				<Link
					href={`/merch/${merch.slug.current}`}
					style={{ textDecoration: "none" }}
				>
					<Image
						 src={imageUrl}
						style={imageStyle}
						alt="Image of the specified product"
						width={400}
						height={300}
					/>
				</Link>
				<div className="product-info-container">
					<p className="product-name">{merch.name}</p>
		
				</div>
			</div>
		</div>
	);
};

export default Merch;
