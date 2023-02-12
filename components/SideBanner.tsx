import React from "react";
import { SideBannerDataTyping } from "../typings";
import { urlFor } from "../lib/client";

type Props = {
	sideBanner: SideBannerDataTyping;
};

const SideBanner = ({ sideBanner }: Props) => {
	return (
		<>
			<div className="side-banner-container" style={{backgroundImage: `url(${urlFor(sideBanner.image)})`}}>
				<h3 className="hero-banner-title text-6xl">
					Community Events
				</h3>
				{/* <img
					src={urlFor(sideBanner.image)}
					alt="Side Banner Image"
					className="side-banner-image"
          style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))'}}
				/> */}
        <div className="side-banner-image" >text</div>
			</div>
		</>
	);
};

export default SideBanner;
