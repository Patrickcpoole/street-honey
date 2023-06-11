import React from "react";
import { BannerDataTyping } from "../typings";
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

const imageStyleMobile: React.CSSProperties = {
  height: "90vh",
  width: "100%",
  objectFit: "cover"
};


const HeroBanner = ({ heroBanner }: Props) => {
	return (
		<div className="bg-offWhite">
			<Carousel fade interval={7000} controls={false}>
        {heroBanner?.map(banner => {
					 const imageUrl = urlFor(banner.image).url();
			
          return (
         
          <Carousel.Item key={banner._id}>
					<div className="text-center position-relative block px-4 w-full height-auto overflow-hidden bg-offWhite">
					<h3 className="text-4xl drop-shadow-2xl md:text-5xl lg:text-6xl sm:text-4xl absolute z-999 text-offWhite top-1/2 left-1/2 -translate-x-1/2 
          -translate-y-1/2 text-shadow block custom-text-shadow">
							A Film Photography Collective and Community
							</h3>
						  <div >
                  <Image
                  className="hidden md:block"
                    src={imageUrl}
                    style={imageStyle}
                    alt="Picture of the author"
                    width={1000}
                    height={800}
                  />
                  <Image
                    className="md:hidden block"
                    src={imageUrl}
                    style={imageStyleMobile}
                    width={1000}
                    height={800}
                    alt="Picture of the author"
                  />
                </div>

                {/* <div className="block md:hidden relative h-[90vh] lg:h-auto w-full">
                  
                  <Image
                  
                    src={imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt="Picture of the author"
                  />
                </div> */}
					
            <div className="hero-banner-info hidden md:block">
            <h5 className="">{banner.desc.split('-')[0]}</h5>
            <h6 className="">{banner.desc.split('-')[1]}</h6>
            </div>
            <div className="hero-banner-info-mobile md:hidden block">
            <h5 className="">{banner.desc.split('-')[0]}</h5>
            <h6 className="">{banner.desc.split('-')[1]}</h6>
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
