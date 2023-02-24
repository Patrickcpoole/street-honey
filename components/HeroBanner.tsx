import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BannerDataTyping } from "../typings";
import {AiOutlineArrowRight} from 'react-icons/ai'
import Carousel from "react-bootstrap/Carousel";

import { urlFor } from "../lib/client";

type Props = {
	heroBanner: BannerDataTyping[];
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
            {/* <h5 style={{marginRight: '5px', marginTop: '5px'}}>View Featured Photographers</h5><AiOutlineArrowRight size={25}/> */}
            </div>
						<img
							src={urlFor(banner.image)}
							alt="headphones"
							className="hero-banner-image"
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
