import React, { useState, useEffect } from "react";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
	
} from "react-icons/ai";
import Link from "next/link";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { MerchTyping } from "../../typings";

import { useStateContext } from "../../context/StateContext";

type Props = {
	merch: MerchTyping;
};

const imageStyle = {
	width: "initial",
	maxHeight: "800px",
	maxWidth: "1000px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const MerchDetails = ({ merch }: Props) => {
	

	const { image, name, price, description, slug } = merch;
	const [index, setIndex] = useState(0);
	const { onAddMerch } = useStateContext();

	

	const imageUrl = urlFor(image && image[0]?.asset?._ref).url();

	return (
		<div>
			<div className="product-detail-container">
				<div className="product-image-container">
					<Image
						src={imageUrl}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
				</div>

				<div className="product-description-container">
					<h1>{name}</h1>
					<div className="flex flex-row">
					
		
					
					<div className="merch-size-container">
					<h5 style={{fontSize:'1.2em'}}><span className="font-semibold text-2xl">Price:</span> ${price}</h5>
          <h5 style={{fontSize:'1.2em'}}><span className="font-semibold text-2xl">Size:</span> One size fits all</h5>
          <p className="mt-5">{description}</p>
						<button
							type="button"
							className="event-button"
							style={{
								backgroundColor: "#333",
								color: "#ebebeb",
								marginRight: "2%",
							}}
							onClick={() => onAddMerch(merch)}
						>
							Add to Cart
						</button>
					</div>
					
			</div>
      </div>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "merch"] {
    slug {
      current
    }
  }
  `;

	const merch = await client.fetch(query);

	const paths = merch.map((merchItem: MerchTyping) => ({
		params: {
			slug: merchItem.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
	const merchQuery = `*[_type == "merch" && slug.current == '${slug}'][0]`;
	const merch = await client.fetch(merchQuery);
  console.log('merch')



	// Add this check to return a 404 page if the product is not found
	if (!merch) {
		return {
			notFound: true,
		};
	}

	return {
		props: { merch },
		revalidate: 1, // add revalidation time (in seconds)
	};
};

export default MerchDetails;
