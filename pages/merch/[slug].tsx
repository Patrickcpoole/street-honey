import React from "react";

import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { MerchTyping } from "../../typings";
import Carousel from "react-bootstrap/Carousel";
import { useStateContext } from "../../context/StateContext";

type Props = {
	merch: MerchTyping;
};

const imageStyle = {

	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const MerchDetails = ({ merch }: Props) => {
	

	const { image, name, price, description} = merch;

	const { onAddMerch } = useStateContext();



	return (
		<div>
<div className="flex flex-col md:flex-row text-gray-800 mt-5  pb-10 ">
			<div className="flex flex-col items-center justify-start relative w-full md:w-1/2 mr-5">
			<div className="bg-offWhite">
			<Carousel controls={true} slide={false} variant="dark">
				{image?.map((merchImage) => {
					return (
						<Carousel.Item key={merchImage._key}>
			<Image
						src={urlFor(merchImage && merchImage?.asset?._ref).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={500}
						height={300}
						
					/>
					</Carousel.Item>
					)})}
					</Carousel>
					</div>
					
				</div>

				<div className="w-full mt-5 md:mt-0  md:w-1/2 flex flex-col  md:items-baseline items-center">
					<h1 style={{ fontSize: "2.5em", fontWeight: 600 }}>{name}</h1>
					<div className="flex flex-row w-full items-center justify-center md:justify-start md:items-stretch ">
					
		
					
					<div className="flex flex-col justify-center items-center md:items-stretch">
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
