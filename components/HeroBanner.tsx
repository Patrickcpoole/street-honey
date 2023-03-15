import React from "react";
import Link from "next/link";
import { BannerDataTyping } from "../typings";
import {AiOutlineArrowRight} from 'react-icons/ai'
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { urlFor } from "../lib/client";

type Props = {
	heroBanner: BannerDataTyping[];
};

const imageStyle = {
	maxHeight: "95vh",
	width: "100%",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};


const HeroBanner = ({ heroBanner }: Props) => {
	return (
		<div style={{backgroundColor: 	'#FAF9F6'}}>
			<Carousel fade interval={7000} controls={false}>
        {heroBanner?.map(banner => {
          console.log('dis is da banner', banner)
          return (
         
          <Carousel.Item key={banner._id}>
					<div className="hero-banner-container">
            <h3 className="hero-banner-title">A Community and Collective of Film Photographers</h3>
            <div className="hero-banner-subtitle">

            </div>
					
						<Image
						src={urlFor(banner.image).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
					
            <div className="hero-banner-info">
            <h5 className="hero-banner-desc">{banner.desc.split('-')[0]}</h5>
            <h6 className="hero-banner-name">{banner.desc.split('-')[1]}</h6>
            </div>
						{/* <Link href={`/product/${banner.product}`}>
							<button type="button"> {banner.buttonText}</button>
						</Link> */}
					</div>
				</Carousel.Item>
				
      
          )
        })}
				
			</Carousel>
		</div>
	);
};

export default HeroBanner;
