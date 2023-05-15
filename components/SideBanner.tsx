import React from "react";
import { SideBannerDataTyping } from "../typings";
import { urlFor } from "../lib/client";
import Image from "next/image";

type Props = {
	sideBanner: SideBannerDataTyping;
};



const imageStyle = {
	width: '100%',
  height: '100%',
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};



const SideBanner = ({ sideBanner }: Props) => {
	return (
		<>
			<div className="w-full md:w-1/2 text-center relative overflow-hidden bg-cover h-screen" >
			<Image
						src={urlFor(sideBanner.image).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
				<h3 className="hero-banner-title text-6xl">
					{sideBanner.title}
				</h3>
		
        <div className="side-banner-image" >text</div>
			</div>
		</>
	);
};

export default SideBanner;
