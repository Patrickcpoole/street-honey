import React from "react";
import { client, urlFor } from "../lib/client";
import { AboutTyping } from "../typings";
import Image from "next/image";

type Props = {
	about: AboutTyping[];
};

const imageStyle = {
	maxHeight: "95vh",
	width: "100%",
	boxShadow: "0px 5px 17px rgba(0,0,0,0.3)",
};

const avatarStyle = {
	height: "12em",
	width: "12em",
	borderRadius: '50%'
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
			<div className="flex flex-col items-center ">
				
				<h2 className="about-header my-10 mx-5">
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
				<div className="border-line"></div>
				<h2 className="about-header my-10">Meet The Team</h2>

				<div
					className="group relative cursor-pointer flex flex-col md:flex-row w-full"
				>
					<div className="md:w-1/2 flex flex-col items-center">
						<Image
							src={urlFor(about[0].patImage).url()}
							alt="About Us Banner Image"
							style={avatarStyle}
							height={500}
							width={500}
						/>
						<h2 className="text-3xl font-semibold mt-5">Patrick Poole</h2>
						<p className="opacity-100 w-3/4 text-center mt-10 mb-20">{about[0].patDesc}</p>
					</div>
					<div className="md:w-1/2 flex flex-col items-center justify-center">
						<Image
							src={urlFor(about[0].patImage).url()}
							alt="About Us Banner Image"
							style={avatarStyle}
							height={500}
							width={500}
						/>
						<h2 className="text-3xl font-semibold mt-5">Patrick Poole</h2>
						<p className="opacity-100 w-3/4 text-center mt-10 mb-20 ">{about[0].patDesc}</p>
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
