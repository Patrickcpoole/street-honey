import React from "react";
import { client, urlFor } from "../lib/client";
import { AboutTyping } from "../typings";
import Link from "next/link";
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
	height: "30em",
	width: "20em",
};

const AboutUs = ({ about }: Props) => {
	return (
		<>
			<h3 className='text-5xl  text-secondary-color my-5 text-center'>Team</h3>

			<div className="group relative flex flex-col md:flex-row w-full justify-center items-center mb-10">
				<Link
					href="photographer/jimmy-mac"
					className="group relative"
					style={{ textDecoration: "none" }}
				>
					<Image
						src={urlFor(about[0].jimmyImage).url()}
						alt="Image of Street Honey Team Member Jimmy Mac"
						style={avatarStyle}
						height={500}
						width={500}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
						<p className="text-white text-lg">Jimmy Mac</p>
					</div>
				</Link>

				<Link
					href="photographer/mickail-cain"
					style={{ textDecoration: "none" }}
					className="group relative mx-20"
				>
					<Image
						src={urlFor(about[0].mickImage).url()}
						alt="Image of Street Honey Team Member Mickail Cain"
						style={avatarStyle}
						height={500}
						width={500}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
						<p className="text-white text-lg">Mickail Cain</p>
					</div>
				</Link>
				<Link
					href="photographer/patrick-poole"
					style={{ textDecoration: "none"}}
					className="group relative"
				>
					<Image
						src={urlFor(about[0].patImage).url()}
						alt="Image of Street Honey Team Member Patrick Poole"
						style={avatarStyle}
						height={500}
						width={500}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
						<p className="text-white text-lg">Patrick Poole</p>
					</div>
				</Link>
			</div>
		</>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "about"]';
	const about = await client.fetch(query);
	console.log("about query resp", about);
	return {
		props: { about },
	};
};

export default AboutUs;
