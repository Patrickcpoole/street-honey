import React from "react";
import { client, urlFor } from "../lib/client";
import { AboutTyping } from "../typings";
import Image from "next/image";

type Props = {
	about: AboutTyping;
};

const imageStyle = {
	maxHeight: "95vh",
	width: "100%",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const AboutUs = ({ about }: Props) => {
	return (
		<>
			<div className="hero-banner-container">
				<h3 className="hero-banner-title">About Us</h3>
				<div className="hero-banner-subtitle"></div>
				{/* <img
					src={urlFor(about[0].bannerImage)}
					alt="About Us Banner Image"
					className="hero-banner-image"
				/> */}
				<Image
						src={urlFor(about[0].bannerImage).url()}
						style={imageStyle}
						alt="Picture of the author"
						width={1000}
						height={800}
					/>
				<div className="hero-banner-info"></div>
				{/* <Link href={`/product/${banner.product}`}>
							<button type="button"> {banner.buttonText}</button>
						</Link> */}
			</div>
			<div className="flex flex-col items-center">
				<h2 className="about-header my-10">
					A Community and Collective of Online Photographers
				</h2>
        <span className="solid"></span>
				<p className="about-desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
					gravida lorem lorem, ac ullamcorper augue aliquam in. Sed nec enim
					ante. Cras metus mauris, faucibus ut arcu ornare, imperdiet volutpat
					dui. Nunc at nulla vitae nisi placerat aliquet in sit amet felis.
					Vivamus fringilla luctus arcu, tempus euismod mauris blandit id.
					Praesent tempor tempus odio in vulputate. Proin neque leo, porta sed
					sem vitae, sodales cursus arcu. Phasellus ullamcorper dapibus velit
					blandit mollis. Nullam consectetur sodales lacus, feugiat pulvinar dui
					volutpat eget.
				</p>
        
				<h2 className="about-header my-10">Meet The Team</h2>
        <div style={{ borderTop: "2px solid #333 ", marginLeft: 20, marginRight: 20, zIndex: 400 }}></div>
				<div className="group relative cursor-pointer flex flex-row w-full" style={{ height:'65vh'}}>
					<div className="w-1/2 flex flex-col items-end mr-10" >
						<img
							src={urlFor(about[0].mickImage)}
							alt="About Us Banner Image"
							className="about-image absolute object-cover filter hover:grayscale transition duration-300 ease-in-out "
						/>
						<div className="about-image absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0 ">
							<div className="flex flex-col items-center justify-center h-full">
								<h3 className="text-3xl font-bold text-black opacity-100 mb-10">Patrick Poole</h3>
                <p className="opacity-100 w-3/4 text-center">{about[0].mickDesc}</p>
							</div>
              </div>
					</div>
					<div className="w-1/2 flex flex-col items-start ml-10">
						<img
							src={urlFor(about[0].patImage)}
							alt="About Us Banner Image"
							className="about-image absolute object-cover filter hover:grayscale transition duration-300 ease-in-out "
						/>
						<div className="about-image absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white z-0">
            <div className="flex flex-col items-center justify-center h-full">
								<h3 className="text-3xl font-bold text-black opacity-100 mb-10">Patrick Poole</h3>
                <p className="opacity-100 w-3/4 text-center">{about[0].patDesc}</p>
							</div>
						</div>
            </div>
				</div>
			</div>
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "about"]';
	const about = await client.fetch(query);
	console.log("this is about", about);

	return {
		props: { about },
	};
};

export default AboutUs;
