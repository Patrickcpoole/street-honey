import React, { useState } from "react";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
	
} from "react-icons/ai";

import {HiOutlineLocationMarker} from 'react-icons/hi'
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { ProductTyping } from "../../typings";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

type Props = {
	products: ProductTyping[];
	product: ProductTyping[];
};

const imageStyle = {
	width: "initial",
	maxHeight: "800px",
	maxWidth: "1000px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const ProductDetails = ({ product, products }: Props) => {
	const { image, name, details, price } = product;
	const [index, setIndex] = useState(0);
	const [selectedSize, setSelectedSize] = useState('medium');
	const [selectedDimesions, setSelectedDimensions] = useState('19.5in x 26in')
	const { decQty, incQty, qty, onAdd } = useStateContext();

	const handleChooseSize = (size: string) => {
		console.log('this is the size', size)
		setSelectedSize(size)
		if(size === 'small') {
			setSelectedDimensions('14.5in x 18.5in')
		} else if(size === 'medium') {
			setSelectedDimensions('19.5in x 26in')
		} else {
			setSelectedDimensions('24.5in x 33.5in')
		}
	}

	return (
		<div>
			<div className="product-detail-container">
				<div className="product-image-container">
					<Image
						src={urlFor(image && image[0]).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
				</div>

				<div className="product-description-container">
					<h1>{name}</h1>
					<div className="flex flex-row">
						<div className="mt-1 mr-1">
					<HiOutlineLocationMarker />
					</div>
						<p className="mr-2 font-semibold">
							{details.split("-")[1]}
						</p>
						<span>|</span>
						<p className="ml-2 italic underline underline-offset-4">
							{details.split("-")[0]}
						</p>
					</div>
					<div className="reviews">
						<div style={{ display: "flex" }}>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
					<p className="price">${price}</p>
					<div className="size-container">
						<h5><span className="font-semibold">Dimensions:</span> {selectedDimesions} </h5>

						<div className="size-options-container">
						<button 
						type="button" 
						className="size-button" 
						style={{backgroundColor : selectedSize === 'small' ? '#1985f1' : '#fff', color:  selectedSize === 'small' ? '#fff' : '#333' }} 
						onClick={ () => handleChooseSize('small')}>
							Small
						</button>
						<button 
						type="button" 
						className="size-button" 
						style={{backgroundColor : selectedSize === 'medium' ? '#1985f1' : '#fff', color:  selectedSize === 'medium' ? '#fff' : '#333' }} 
						onClick={ () => handleChooseSize('medium')}>
							Medium
						</button>
						<button 
						type="button" 
						className="size-button" 
						style={{backgroundColor : selectedSize === 'large' ? '#1985f1' : '#fff', color:  selectedSize === 'large' ? '#fff' : '#333' }} 
						onClick={ () => handleChooseSize('large')}>
							Large
						</button>
						</div>
					</div>
					
					
					<div className="buttons">
						<button
							type="button"
							className="event-button"
							style={{
								backgroundColor: "#fff",
								color: "#333",
								marginRight: "2%",
							}}
							onClick={() => onAdd(product, qty)}
						>
							Add to Cart
						</button>
						<button type="button" className="event-button">
							Buy Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);

	const paths = products.map((product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`;

	const productsQuery = '*[_type == "product"]';

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

	console.log("this is product", product);
	console.log("this is products", products);

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, product },
	};
};

export default ProductDetails;
