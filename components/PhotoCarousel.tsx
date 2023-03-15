import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { ProductTyping } from "../typings";

type Props = {
	photoData: ProductTyping[];
};

const imageStyle = {
	maxHeight: "600px",
	maxWidth: "400px",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const PhotoCarousel = ({ photoData }: Props) => {
	return (
      <>
			<Carousel fade interval={7000} controls={true}>
				
				{photoData?.map((photo, index) => {
					return (
						<Carousel.Item key={index}>
					
								<Image
									src={urlFor(photo && photo.image[0]).url()}
									style={imageStyle}
									alt="Picture of the author"
									width={1000}
									height={800}
								/>
						
						</Carousel.Item>
					);
				})}
			</Carousel>
      </>
	);
}

export default PhotoCarousel;
