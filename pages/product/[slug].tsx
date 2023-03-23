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
	

	const { image, name, details, price, photographer} = product;
	const [index, setIndex] = useState(0);
	const [selectedSize, setSelectedSize] = useState('medium');
	const [selectedDimensions, setSelectedDimensions] = useState('19.5in x 26in')
	const { decQty, incQty, qty, onAdd } = useStateContext();
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

	const handleChooseSize = (size: string) => {
		console.log('this is the size', size)
		setSelectedSize(size)
		if(size === 'Small') {
			setSelectedDimensions('14.5in x 18.5in')
		} else if(size === 'Medium') {
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
						<Link
						href={`/photographer/${photographerData ? photographerData.slug.current : null}`}
						style={{ textDecoration: "none" }}
					><p className="ml-2 italic underline underline-offset-4">
							{details.split("-")[0]}
						</p></Link>
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
						<h5><span className="font-semibold">Dimensions:</span> {selectedDimensions} </h5>

						<div className="size-options-container">
						<button 
						type="button" 
						className="size-button" 
						style={{border : selectedSize === 'Small' ? 'solid 1px #333' : '#fff' }} 
						onClick={ () => handleChooseSize('Small')}>
							Small
						</button>
						<button 
						type="button" 
						className="size-button" 
						style={{border : selectedSize === 'Medium' ? 'solid 1px #333' : '#fff' }} 
						onClick={ () => handleChooseSize('Medium')}>
							Medium
						</button>
						<button 
						type="button" 
						className="size-button" 
						style={{border : selectedSize === 'Large' ? 'solid 1px #333' : '#fff' }} 
						onClick={ () => handleChooseSize('Large')}>
							Large
						</button>
						</div>
					</div>
					
					
					<div style={{display:'flex', justifyContent:'center', width: '65%'}}>
						<button
							type="button"
							className="event-button"
							style={{
								backgroundColor: "#333",
								color: "#ebebeb",
								marginRight: "2%",
							}}
							onClick={() => onAdd(product, selectedSize, selectedDimensions)}
						>
							Add to Cart
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
	console.log('products', products[0].photographer._ref)

	const bannerQuery = '*[_type == "banner"]';
	const bannerData = await client.fetch(bannerQuery);

	return {
		props: { products, product },
	};
};

export default ProductDetails;
