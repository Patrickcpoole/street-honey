import React, { useState, useEffect } from "react";
import {
	AiOutlineMinus,
	AiOutlinePlus,
	AiFillStar,
	AiOutlineStar,
	AiOutlineCaretDown,
	AiOutlineCamera,
	AiOutlineCheckCircle
} from "react-icons/ai";

import SizeTable from "../../components/SizeTable"

import {FaFlagUsa} from "react-icons/fa"

import {MdOutlineAttachMoney} from "react-icons/md"

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { ProductTyping, PhotographerTyping } from "../../typings";

import { useStateContext } from "../../context/StateContext";
import { flexbox } from "@mui/system";

type Props = {
	product: ProductTyping;
	photographerData: PhotographerTyping;
};

const imageStyle = {
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const ProductDetails = ({ product }: Props) => {
	const { image, name, details, price, photographer } = product;
	const [index, setIndex] = useState(0);
	const [selectedSize, setSelectedSize] = useState("Small");
	const [selectedDimensions, setSelectedDimensions] = useState("8in x 10in");
	const [selectedPrice, setSelectedPrice] = useState(65);
	const { onAdd } = useStateContext();
	const [photographerData, setPhotographerData] = useState(null);

	useEffect(() => {
		async function fetchProductPhotographer() {
			if (photographer) {
				const query = `*[_type == "photographer" && _id == "${photographer._ref}"]`;
				const photographerResponse = await client.fetch(query);
				console.log('this is the photographer response', photographerResponse)
				setPhotographerData(photographerResponse[0]);
			}
		}
		fetchProductPhotographer();
	}, [photographer]);

	const handleChooseSize = (size: string) => {
		setSelectedSize(size);
		if (size === "Small") {
			setSelectedPrice(80);
			setSelectedDimensions("8in x 10in");
		} else if (size === "Medium") {
			setSelectedDimensions("12in x 15in");
			setSelectedPrice(100);
		} else {
			setSelectedDimensions("16in x 20in");
			setSelectedPrice(150);
		}
	};

	const imageUrl = urlFor(image && image[0]?.asset?._ref).url();

	return (
		<div>
			<div className="flex flex-col md:flex-row text-gray-800 mt-5  pb-10 ">
			<div className="flex flex-col items-center justify-start relative w-full md:w-1/2 mr-5">
					<Image
						src={imageUrl}
						style={imageStyle}
						alt="Picture of the author"
						width={600}
						height={400}
				
					/>
				</div>

				<div className="w-full mt-5 md:mt-0  md:w-1/2 flex flex-col  md:items-stretch items-center ">
					<h1 style={{ fontSize: "2.5em", fontWeight: 700 }}>{name}</h1>
					<div className="flex flex-row w-full items-center justify-center md:justify-start md:items-stretch ">
						<div className="mt-1 mr-1">
							<HiOutlineLocationMarker />
						</div>
						<p className="mr-2 font-semibold">{details.split("-")[1]}</p>
						<span>|</span>
						<Link
							href={`/photographer/${
								photographerData
									? (photographerData as PhotographerTyping).slug.current
									: null
							}`}
							style={{ textDecoration: "none", color: "#333" }}
						>
							<p className="ml-2 underline underline-offset-4 text-decoration-none">
								{details.split("-")[0]}
							</p>
						</Link>
					</div>
					{/* <div className="reviews">
						<div style={{ display: "flex" }}>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div> */}
					
					<div className="w-full flex flex-col justify-center md:text-left text-center items-stretch mt-3">
						<h5 style={{ fontSize: "1.1em" }}>
							<span className="font-semibold text-lg">Price:</span> $
							{selectedPrice}
						</h5>
						
						<h5 style={{ fontSize: "1.1em" }}>
							<span className="font-semibold text-lg">Dimensions:</span>{" "}
							{selectedDimensions}{" "}
						</h5>
						<div className="flex flex-row text-center justify-center items-center md:justify-start ">
						
							<button
								type="button"
								className="size-button"
								style={{
									border: selectedSize === "Small" ? "solid 1px #333" : "#fff",
								}}
								onClick={() => handleChooseSize("Small")}
							>
								Small
							</button>
							<button
								type="button"
								className="size-button"
								style={{
									border: selectedSize === "Medium" ? "solid 1px #333" : "#fff",
								}}
								onClick={() => handleChooseSize("Medium")}
							>
								Medium
							</button>
							<button
								type="button"
								className="size-button"
								style={{
									border: selectedSize === "Large" ? "solid 1px #333" : "#fff",
								}}
								onClick={() => handleChooseSize("Large")}
							>
								Large
							</button>
						</div>
				
						
						<div className="w-full">
						<button
							type="button"
							className="event-button"
							style={{
								backgroundColor: "#333",
								color: "#ebebeb",
								marginRight: "2%",
							}}
							onClick={() =>
								onAdd(product, selectedSize, selectedDimensions, selectedPrice)
							}
						>
							Add to Cart
						</button>
						</div>
					
					<div className="mt-5 w-full md:w-4/5 text-left">
						<Accordion
							disableGutters
							elevation={0}
							className="bg-primary-color"
						>
							<AccordionSummary
								expandIcon={<AiOutlineCaretDown color="#333" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								About the Artist
							</AccordionSummary>
							<AccordionDetails>
								{photographerData
									? (photographerData as PhotographerTyping).bio : 'No bio'}
							</AccordionDetails>
						</Accordion>
						<Accordion
							disableGutters
							elevation={0}
							className="bg-primary-color"
						>
							<AccordionSummary
								expandIcon={<AiOutlineCaretDown color="#333" />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>Sizing
							</AccordionSummary>
							<AccordionDetails>
							<div className="flex flex-col">
								<p className="font-semibold">Different format analog cameras can produce different sized photographs</p>
								<p className="font-semibold">All formats will include a minimum 1 inch border width adjusted border width outlined below</p>
								<SizeTable />
								</div>
							</AccordionDetails>
						</Accordion>
						<Accordion
							disableGutters
							elevation={0}
							className="bg-primary-color"
						>
							<AccordionSummary
								expandIcon={<AiOutlineCaretDown color="#333" />}
								aria-controls="panel3a-content"
								id="panel3a-header"
							>
								Quality
							</AccordionSummary>
							<AccordionDetails>
								All of museum-quality prints are made using a Giclée technique
								on the highest quality paper out there. Our prints are made with
								an acid-free 308gsm photo paper that is 100% Cotton Rag
								composite designed for fine art prints.
							</AccordionDetails>
						</Accordion>
						<Accordion
							disableGutters
							elevation={0}
							className="bg-primary-color"
						>
							<AccordionSummary
								expandIcon={<AiOutlineCaretDown color="#333" />}
								aria-controls="panel4a-content"
								id="panel4a-header"
							>
								Shipping & Returns
							</AccordionSummary>
							<AccordionDetails>
								<ul>
									<li>
										<span className="font-semibold">Shipping:</span> Items are
										made to order and typically ship within 3-5 business days.{" "}
									</li>
									<li>
										<span className="font-semibold">Returns:</span> As every
										order is made custom for you, we are not able to accept
										returns at this time. In the rare instance there&apos;s a
										damage during shipping - just reach out to us - we&apos;ll
										make it right.
									</li>
								</ul>
							</AccordionDetails>
						</Accordion>
					</div>
					<div className="flex flex-col mt-5 md:w-4/5 w-full">
						<div className="flex">
							<div className="flex flex-col items-center w-1/3 text-center ml-5">
								<AiOutlineCamera size={"2em"} />
								<h3 className="text-md font-semibold leading-tight">Photographer Backed</h3>
								<p className="text-sm mt-1">Support a photographer with every purchase. </p>
							</div>
							<div className="flex flex-col items-center  text-center w-1/3 ">
							<AiOutlineCheckCircle size={"2em"} />
							<h3 className="text-md font-semibold leading-tight">Gallery <br/> Quality</h3>
							<p className="text-sm mt-1 px-2">Giclée Fine Art Certified </p>
							</div>
							<div className="flex flex-col items-center  text-center w-1/3 mr-5">
							<FaFlagUsa size={"2em"} />
							<h3 className="text-md font-semibold leading-tight">Made in the <br/>USA</h3>
							<p className="text-sm mt-1 px-4">Arrives ready-to-hang</p>
							</div>
						</div>
						<div className="flex mt-5">
						</div>
					</div>
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

	const paths = products.map((product: ProductTyping) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({
	params: { slug },
}: {
	params: { slug: string };
}) => {
	const productQuery = `*[_type == "product" && slug.current == "${slug}"][0]`;
	const productsQuery = `*[_type == "product"]`;

	const product = await client.fetch(productQuery);
	const products = await client.fetch(productsQuery);

	// Add this check to return a 404 page if the product is not found
	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: { product, products },
		revalidate: 1, // add revalidation time (in seconds)
	};
};

<style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%; /* Maintain aspect ratio (1:1 for square) */
        }

        .image-container > :global(img) {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .image-container {
            padding-bottom: 60%; /* Adjust the aspect ratio for smaller screens */
          }
        }
      `}</style>

export default ProductDetails;
