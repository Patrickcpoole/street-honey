import React, {useState, useEffect} from "react";
import Image from "next/image";
import { client, urlFor } from "../../lib/client";
import { PhotographerTyping } from "../../typings";
import { Product, } from '../../components'


type Props = {
	photographer: PhotographerTyping;
};

const imageStyle = {
	width: "initial",
	maxHeight: "600px",
	maxWidth: "400px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const PhotographerDetails = ({ photographer }: Props) => {
	const { image, name, bio, location, favoriteCamera } = photographer;
	const [photoData, setPhotoData] = useState([])

	useEffect(() => {
		async function fetchPhotographerPhotos() {
			console.log("photographer prop being passed", photographer);

				const query = `*[_type == "product" && photographer._ref in *[_type=="photographer" && _id=="${photographer._id}"]._id ]`;
				// Books by author.name (book.author is a reference)
      //*[_type == "book" && author._ref in *[_type=="author" && name=="John Doe"]._id ]{...}
				const photoProductResponse = await client.fetch(query);
				console.log("photo product response", photoProductResponse);
				setPhotoData(photoProductResponse)
			
		}
		fetchPhotographerPhotos();
	}, []);

	return (
		<>
			<div className="photographer-detail-container">
				<div className="photographer-image-container">
					<Image
						src={urlFor(image && image[0]).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
				</div>
				<div className="photographer-description-container">
					<h1>{name}</h1>
					<h4 className="mr-2 font-semibold">{location}</h4>
					<h5 className="mr-2 font-semibold">
						Favorite Camera: {favoriteCamera}
					</h5>
					<p className="mt-5">{bio}</p>
					<div>
					
					</div>
				</div>
				
			</div>
			<h1 style={{fontSize: '2.5em', textAlign: 'center', paddingTop: '2%', paddingBottom: '1%', fontWeight: '700', color: '#333'}}>Photographer Gallery</h1>
			<div className='products-container'>
			
      {photoData?.map((filteredProduct) => <Product key={filteredProduct._id} product={filteredProduct}/>)}
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

	const paths = photographers.map((photographers) => ({
		params: {
			slug: photographers.slug.current,
		},
	}));

	return {
		paths,
		fallback: "blocking",
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	console.log("this is slug static prop", slug);
	const query = `*[_type == "photographer" && slug.current == '${slug}'][0]`;

	const photographer = await client.fetch(query);

	console.log("this is photographer", photographer);

	return {
		props: { photographer },
	};
};

export default PhotographerDetails;
