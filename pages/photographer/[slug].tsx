import React, {useState, useEffect} from "react";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { PhotographerTyping, ProductTyping } from "../../typings";
import { Product, } from '../../components'


type Props = {
	photographer: PhotographerTyping;
};

const imageStyle = {

	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const PhotographerDetails = ({ photographer }: Props) => {
	const { image, name, location, favoriteCamera, question1, answer1, question2, answer2, question3, answer3 } = photographer;
	const [photoData, setPhotoData] = useState<ProductTyping[]>([]);

	useEffect(() => {
		async function fetchPhotographerPhotos() {
				console.log('photographer props', photographer)

				const query = `*[_type == "product" && photographer._ref in *[_type=="photographer" && _id=="${photographer._id}"]._id ]`;
				// Books by author.name (book.author is a reference)
      //*[_type == "book" && author._ref in *[_type=="author" && name=="John Doe"]._id ]{...}
				const photoProductResponse = await client.fetch(query);
				console.log('photo product response', photoProductResponse)
				setPhotoData(photoProductResponse)
			
		}
		fetchPhotographerPhotos();
	}, [photographer]);

	return (
		<>
			<div className="flex flex-col md:flex-row text-gray-800 mt-10 border-b border-gray-800 pb-10 ">
				<div className="flex flex-col items-center justify-start relative w-full md:w-1/2">
					<Image
						src={urlFor(image && image[0]).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={500}
						height={300}
					
					/>
				</div>
				<div className="w-full md:w-1/2  px-5 md:px-0 md:pr-20 flex flex-col justify-center">
					<h1 className="text-4xl font-semibold text-center md:text-left mt-10 md:mt-0">{name}</h1>
					<h4 className="mr-2 mt-4 text-lg font-semibold text-center md:text-left">Location: {location}</h4>
					<h4 className="mr-2 text-lg font-semibold text-center md:text-left">
						Favorite Camera: {favoriteCamera}
					</h4>
					<p className="mt-6 font-bold">{question1}</p>
					<p className="mt-2 mb-5">{answer1}</p>
					<p className="mt-3 font-bold">{question2}</p>
					<p className="mt-2 mb-5">{answer2}</p>
					<p className="mt-3 font-bold">{question3}</p>
					<p className="mt-2 mb-5">{answer3}</p>
					<div>
					
					</div>
				</div>
				
			</div>
			<h1 style={{fontSize: '2.5em', textAlign: 'center', paddingTop: '2%', paddingBottom: '1%', fontWeight: '600', color: '#333'}}>Photographer Gallery</h1>
			<div className='products-container'>
			
      {photoData && photoData.length > 0 ? (
  photoData.map((filteredProduct) => (
    <Product product={filteredProduct} key={filteredProduct._id}/>
  ))
) : (
  <p>No products found</p>
)}
      </div>
		</>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "photographer"] {
    slug {
      current
    }
  }
  `;

	const photographers = await client.fetch(query);

	const paths = photographers.map((photographers: PhotographerTyping) => ({
		params: {
			slug: photographers.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};
export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {

	const query = `*[_type == "photographer" && slug.current == '${slug}'][0]`;
	const photographer = await client.fetch(query);

	return {
		props: { photographer },
	};
};

export default PhotographerDetails;
